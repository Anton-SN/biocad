import React, { Component } from 'react';
import { connect } from 'react-redux';
import appliances from '../../db/appliances.json';

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
    this.setState({ tool, report: null });
  };

  generateReport = report => {
    this.setState({ report });
  };

  render() {
    return (
      <div>
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
