import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cool from '../../../image/cool.svg';
import error from '../../../image/error.svg';
import t from '../../../locales/t';
import styles from './Table.module.css';

class Table extends Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
    report: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  render() {
    const { l, report } = this.props;
    const content =
      report === null
        ? null
        : report.map(e => (
            // eslint-disable-next-line no-restricted-globals
            <div className={styles.row}>
              <div>
                {e.data}
                <br />
                {e.time}
              </div>
              <div>
                {e.solutions.map((elem, i) => (
                  <p key={elem.substance}>
                    B{i + 1}: №{elem.substance}
                  </p>
                ))}
              </div>
              <div className={styles.inaccuracy}>
                <p>{e.slope}</p>
                <img
                  className={styles.status}
                  src={e.slope > 95 && e.slope < 105 ? cool : error}
                  alt="Статус"
                />
              </div>
              <div className={styles.inaccuracy}>
                <p>{e.offset}</p>
                <img
                  className={styles.status}
                  src={e.offset > -20 && e.offset < 20 ? cool : error}
                  alt="Статус"
                />
              </div>
              <div>{e.user[l]}</div>
            </div>
          ));

    let render;
    if (report === null) {
      render = <p>{t('search.table.create', l)}</p>;
    } else {
      render =
        // eslint-disable-next-line eqeqeq
        report == false ? (
          <div>{t('search.table.error', l)}</div>
        ) : (
          <div className={styles.container}>
            <p className={styles.title}>{t('search.table.title', l)}</p>
            <div className={styles}>
              <div className={styles.firstRow}>
                <div>{t('search.table.data', l)}</div>
                <div className={styles.wrap}>{t('search.table.sol', l)}</div>
                <div>{t('search.table.slope', l)}</div>
                <div>{t('search.table.offset', l)}</div>
                <div>{t('search.table.user', l)}</div>
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
