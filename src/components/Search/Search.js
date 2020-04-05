import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import appliances from '../../db/appliances.json';
// import t from '../../locales/t';
// import styles from './Search.module.css';

import SearchInput from './SearchInput/SearchInput';

class Search extends Component {
  static propTypes = {
    // l: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      tool: null,
    };
  }

  choiceTool = tool => {
    this.setState({ tool });
  };

  render() {
    // const { l } = this.props;

    return (
      <div>
        {/* <p>{t('search.title', l)}</p> */}
        <SearchInput appliances={appliances} onChange={this.choiceTool} />
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(Search);
