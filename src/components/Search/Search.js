import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import appliances from '../../db/appliances.json';
// import t from '../../locales/t';
// import styles from './Search.module.css';

import SearchInput from './SearchInput/SearchInput';
import SearchMain from './SearchMain/SearchMain';

class Search extends Component {
  static propTypes = {
    // l: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      tool: null,
      // tool: {
      //   ENG: {
      //     typeOfEquipment: 'Libra',
      //     status: 'Ready for work',
      //     Manufacturer: 'Ohaus',
      //     model: 'AX-123',
      //     responsibleUnit: 'Laboratory Equipment Service Group',
      //     operationalUnit: 'Chemical Analytical Laboratory 2.0',
      //     MOL: 'Ivanov Ivan Ivanovich',
      //     territory: 'St. Petersburg (Neudorf)',
      //     serialNumber: 'B715976163',
      //     GUID: '508b2a71-662e-4983-ae0c-3cb0c1cd21c5',
      //     BimsId: '49db8db1-585f-4b9e-bbf0-8a59698edc8b',
      //     tamRU: 'А-001234',
      //     tamENG: 'A-001234',
      //     picture: 'scale',
      //     title: 'Analytical Libra OHAUS Adventurer АХ324 (B715976163)',
      //   },
      //   RUS: {
      //     typeOfEquipment: 'Весы',
      //     status: 'Готов к работе',
      //     Manufacturer: 'Ohaus',
      //     model: 'AX-123',
      //     responsibleUnit: 'Группа обслуживания лабораторного оборудования',
      //     operationalUnit: 'Химико-аналитическая лаборатория 2.0',
      //     MOL: 'Иванов Иван Иванович',
      //     territory: 'г. Санкт-Петербург (Нойдорф)',
      //     serialNumber: 'B715976163',
      //     GUID: '508b2a71-662e-4983-ae0c-3cb0c1cd21c5',
      //     BimsId: '49db8db1-585f-4b9e-bbf0-8a59698edc8b',
      //     tamRU: 'А-001234',
      //     tamENG: 'A-001234',
      //     picture: 'scale',
      //     title: 'Аналитические весы OHAUS Adventurer АХ324 (B715976163)',
      //   },
      // },
    };
  }

  choiceTool = tool => {
    this.setState({ tool });
  };

  render() {
    return (
      <div>
        {/* <p>{t('search.title', l)}</p> */}
        <SearchInput appliances={appliances} onChange={this.choiceTool} />
        <SearchMain tool={this.state.tool} />
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(Search);
