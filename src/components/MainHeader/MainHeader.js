import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import setLanguage from '../../redux/actions/language';
// import styles from './MainHeader.module.css';

class MainHeader extends React.Component {
  static propTypes = {
    l: PropTypes.string.isRequired,
    setLang: PropTypes.func.isRequired,
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
    this.setState({ anchorEl: null });
  };

  render() {
    const { l } = this.props;
    const { anchorEl } = this.state;
    return (
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={this.handleClick}
        >
          {l}
        </Button>
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

export default connect(mapState, mapDispath)(MainHeader);
