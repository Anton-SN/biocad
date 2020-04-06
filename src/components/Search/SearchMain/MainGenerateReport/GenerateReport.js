import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from '../../../../locales/t';
import styles from './GenerateReport.module.css';

class Report extends Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
  };

  render() {
    const { l } = this.props;
    return (
      <form className={styles.container}>
        <select className={styles.select}>
          <option>{t('search.report.m1', l)}</option>
          <option>{t('search.report.m3', l)}</option>
          <option>{t('search.report.m6', l)}</option>
          <option>{t('search.report.m12', l)}</option>
        </select>
        <div className={styles.radioInput}>
          <div className={styles.item}>
            <input type="radio" id="Calibration" name="typeReport" />
            <label htmlFor="Calibration">
              {t('search.report.calibration', l)}
            </label>
          </div>
          <div className={styles.item}>
            <input type="radio" id="Measuring" name="typeReport" />
            <label htmlFor="Measuring">{t('search.report.measuring', l)}</label>
          </div>
          <div className={styles.item}>
            <input type="radio" id="Using" name="typeReport" />
            <label htmlFor="Using">{t('search.report.using', l)}</label>
          </div>
        </div>
        <input
          className={styles.btn}
          type="submit"
          value={t('button.report', l)}
        />
      </form>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(Report);
