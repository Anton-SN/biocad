import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import t from '../../../../locales/t';
import experience from '../../../../db/experience.json';
import styles from './GenerateReport.module.css';

class Report extends Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
    tam: PropTypes.string.isRequired,
    generateReport: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      type: null,
    };
  }

  monthValue = e =>
    e.target.name === 'typeReport'
      ? this.setState({ type: e.target.value })
      : null;

  generateResponce = e => {
    e.preventDefault();
    const { generateReport, tam } = this.props;
    const currentDate = moment()
      .set('year', 2019)
      .set('month', 10)
      .set('date', 10)
      .format('YYYY-MM-DD');
    const month = e.target.month.value;
    const period = moment(currentDate)
      .subtract(month, 'month')
      .format('YYYY-MM-DD');
    const { type } = this.state;
    const report = experience.experience.filter(
      elem =>
        (elem.tamRU === tam || elem.tamENG === tam) &&
        elem.type === type &&
        moment(`${elem.dataMoment}`).isBetween(
          moment(period),
          moment(currentDate),
          null,
          '[]',
        ),
    );
    generateReport(report);
  };

  render() {
    const { l } = this.props;
    const { type } = this.state;
    return (
      <div>
        <form
          className={styles.container}
          onChange={this.monthValue}
          onSubmit={this.generateResponce}
        >
          <select className={styles.select} name="month">
            <option value="1">{t('search.report.m1', l)}</option>
            <option value="3">{t('search.report.m3', l)}</option>
            <option value="6">{t('search.report.m6', l)}</option>
            <option value="12">{t('search.report.m12', l)}</option>
          </select>
          <div className={styles.radioInput}>
            <div className={styles.item}>
              <input
                type="radio"
                id="Calibration"
                name="typeReport"
                value="calibration"
                required
              />
              <label htmlFor="Calibration">
                {t('search.report.calibration', l)}
              </label>
            </div>
            <div className={styles.item}>
              <input
                type="radio"
                id="Measuring"
                name="typeReport"
                value="measuring"
              />
              <label htmlFor="Measuring">
                {t('search.report.measuring', l)}
              </label>
            </div>
            <div className={styles.item}>
              <input type="radio" id="Using" name="typeReport" value="using" />
              <label htmlFor="Using">{t('search.report.using', l)}</label>
            </div>
          </div>
          <input
            className={`${styles.btn} ${type ? styles.btn__ready : null}`}
            type="submit"
            disabled={!type}
            value={t('button.report', l)}
          />
        </form>
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(Report);
