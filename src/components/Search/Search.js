import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import t from '../../locales/t';
// import styles from './Search.module.css';

import SearchInput from './SearchInput/SearchInput';

class Search extends Component {
  static propTypes = {
    // l: PropTypes.string.isRequired,
  };
  render() {
    // const { l } = this.props;

    return (
      <div>
        {/* <p>{t('search.title', l)}</p> */}
        <SearchInput />
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(Search);
