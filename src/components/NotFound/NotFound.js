import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from '../../locales/t';
// import styles from './NotFound.module.css';

class NotFound extends Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
  };
  render() {
    const { l } = this.props;

    return (
      <div>
        <p>{t('notFound.title', l)}</p>
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(NotFound);
