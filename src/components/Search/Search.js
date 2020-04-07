import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import appliances from '../../db/appliances.json';
// import t from '../../locales/t';
// import styles from './Search.module.css';

import SearchInput from './SearchInput/SearchInput';
import SearchMain from './SearchMain/SearchMain';
import Table from './Table/Table';

class Search extends Component {
  static propTypes = {
    // l: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      tool: null,
      report: null,
    };
  }

  choiceTool = tool => {
    this.setState({ tool });
  };

  generateReport = report => {
    this.setState({ report });
  };

  render() {
    return (
      <div>
        {/* <p>{t('search.title', l)}</p> */}
        <SearchInput appliances={appliances} choiceTool={this.choiceTool} />
        <SearchMain
          tool={this.state.tool}
          generateReport={this.generateReport}
        />
        <Table report={this.state.report} />
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(Search);
