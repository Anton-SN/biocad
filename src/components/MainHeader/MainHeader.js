import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import setLanguage from '../../redux/actions/language';
import dateButtons from './dateButtons.json';
import t from '../../locales/t';
import styles from './MainHeader.module.css';

class MainHeader extends React.Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
    setLang: PropTypes.func.isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => this.setState({ anchorEl: null });

  handleChangeLanguage = language => {
    const { setLang } = this.props;
    setLang(language);
    this.handleClose();
  };

  render() {
    const { l } = this.props;
    const {
      location: { pathname },
    } = this.props;
    const { anchorEl } = this.state;
    const button = dateButtons.buttons.filter(
      elem => elem.pathname !== pathname,
    )[0];
    return (
      <div>
        <div className={styles.content}>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={() => this.handleChangeLanguage('RUS')}>
              RUS
            </MenuItem>
            <MenuItem onClick={() => this.handleChangeLanguage('ENG')}>
              ENG
            </MenuItem>
          </Menu>
          <div className={styles.conteinerBtn}>
            <div className={styles.conteinerBtn__item}>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                component={Link}
                to={button.to}
              >
                {t(`button.${button.title}`, l)}
              </Button>
            </div>
            <div className={styles.conteinerBtn__item}>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={this.handleClick}
              >
                {l}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  l: state.language.language,
});

const mapDispath = dispatch => ({
  setLang: bindActionCreators(setLanguage, dispatch),
});

export default withRouter(connect(mapState, mapDispath)(MainHeader));
