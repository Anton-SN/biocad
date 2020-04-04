import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from '../../locales/t';
// import styles from './Main.module.css';

class Main extends Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
  };
  render() {
    const { l } = this.props;
    return (
      <div>
        <p>{t('main.title', l)}</p>
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(Main);
