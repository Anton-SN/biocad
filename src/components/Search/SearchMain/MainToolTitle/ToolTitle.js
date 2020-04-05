/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ToolTitle.module.css';

class ToolTitle extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { image, title } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.toolImage}>
          <img
            // eslint-disable-next-line import/no-dynamic-require
            src={require(`../../../../image/${image}.svg`)}
            alt="Инструмент"
          />
        </div>
        <div className={styles.toolDecription}>{title}</div>
      </div>
    );
  }
}

export default ToolTitle;
