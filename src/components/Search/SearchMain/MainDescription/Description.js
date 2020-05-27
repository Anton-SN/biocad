import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Description.module.css';
import t from '../../../../locales/t';

class Description extends Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const { l, dispatch, ...otherProps } = this.props;
    const descriptionField = Object.keys(otherProps).map(e => (
      <p key={e}>
        <span className={styles.case}>{t(`search.description.${e}`, l)}: </span>
        <span
          className={
            e === 'GUID' || e === 'BimsId' || e === 'tam'
              ? styles.valueEliteId
              : styles.value
          }
        >
          {otherProps[e]}
        </span>
      </p>
    ));
    return <div className={styles.container}>{descriptionField}</div>;
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(Description);
