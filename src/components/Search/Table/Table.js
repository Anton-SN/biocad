import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from '../../../locales/t';
import styles from './Table.module.css';

class Table extends Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
    report: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  render() {
    const { l, report } = this.props;
    const content = report.map(e => (
      // eslint-disable-next-line no-restricted-globals
      <div className={styles.row}>
        <div>
          {e.data}
          <br />
          {e.time}
        </div>
        <div>
          {e.solutions.map((elem, i) => (
            <p>
              B{i + 1}: №{elem.substance}
            </p>
          ))}
        </div>
        <div>{e.slope}</div>
        <div>{e.offset}</div>
        <div>{e.user[l]}</div>
      </div>
    ));

    let render;
    if (report === null) {
      render = <p>Создайте отчет</p>;
    } else {
      render =
        // eslint-disable-next-line eqeqeq
        report == false ? (
          <div className={styles.error}>Нет данных</div>
        ) : (
          <div className={styles.container}>
            <p className={styles.title}>Calibration report</p>
            <div className={styles}>
              <div className={styles.firstRow}>
                <div>Data</div>
                <div>Used buffer solutions</div>
                <div>Slope, % Norm 95-105</div>
                <div>Offset, mV Norm ±(0-20)</div>
                <div>User</div>
              </div>
              <div>{content}</div>
            </div>
          </div>
        );
    }
    return <div>{render}</div>;
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(Table);
