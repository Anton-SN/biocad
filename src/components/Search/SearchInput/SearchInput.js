import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import appliances from '../../../db/appliances.json';
import t from '../../../locales/t';
import styles from './SearchInput.module.css';

class SearchInput extends Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
  };
  render() {
    const { l } = this.props;

    return (
      <div className={styles.search}>
        <p className={styles.caption}>{t('search.inputNumber', l)}</p>
        <form>
          <input className={styles.input__text} type="text" />
          <button className={styles.input__btn}>{t('button.search', l)}</button>
        </form>
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(SearchInput);
