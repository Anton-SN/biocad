import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import t from '../../../locales/t';
// import styles from './SearchMain.module.css';

import ToolTitle from './MainToolTitle/ToolTitle';

class SearchMain extends Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
    tool: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  render() {
    const { l, tool } = this.props;

    return (
      <div>
        {tool === null ? (
          <p>Выберите Предмет</p>
        ) : (
          <ToolTitle title={tool[l].title} image={tool[l].picture} />
        )}
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(SearchMain);
