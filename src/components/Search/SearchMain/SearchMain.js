import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from '../../../locales/t';
import styles from './SearchMain.module.css';

import ToolTitle from './MainToolTitle/ToolTitle';
import Description from './MainDescription/Description';
import Report from './MainGenerateReport/GenerateReport';

class SearchMain extends Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
    generateReport: PropTypes.func.isRequired,
    tool: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  };

  static defaultProps = {
    tool: {},
  };

  render() {
    const { l, tool, generateReport } = this.props;

    return (
      <div>
        {tool === null ? (
          <p>{t('search.inputCaption', l)}</p>
        ) : (
          <div className={styles.container}>
            <ToolTitle
              className={styles.title}
              title={tool[l].title}
              image={tool[l].picture}
            />
            <div className={styles.description}>
              <Description
                typeOfEquipment={tool[l].typeOfEquipment}
                status={tool[l].status}
                manufacturer={tool[l].Manufacturer}
                model={tool[l].model}
                responsibleUnit={tool[l].responsibleUnit}
                operationalUnit={tool[l].operationalUnit}
                MOL={tool[l].MOL}
                territory={tool[l].territory}
                serialNumber={tool[l].serialNumber}
                GUID={tool[l].GUID}
                BimsId={tool[l].BimsId}
                tam={l === 'ENG' ? tool[l].tamENG : tool[l].tamRU}
              />
            </div>
            <Report
              className={styles.report}
              generateReport={generateReport}
              tam={l === 'ENG' ? tool[l].tamENG : tool[l].tamRU}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

export default connect(mapState)(SearchMain);
