import React, {Component,Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
  },
  toolbar: theme.mixins.toolbar
});
class Header extends Component {
  constructor() {
    super();
    this.state = {open: false};
  }
 
  handleToggle = () => this.setState({open: !this.state.open});
	render(){
		const { classes } = this.props; 
		return (<Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={this.handleToggle} >
              <MenuIcon />
            </IconButton>
            <div style={{ flex: 1 }}>
              <Typography variant="h5" color="inherit">
                Demo
              </Typography>

            </div>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </Toolbar>
        </AppBar>
              <Drawer
                  className={classes.drawer}
                  variant="persistent"
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  open= {this.state.open}
                  >
                  <div className={classes.toolbar } />
                  <MenuItem onClick={this.handleToggle}>Home</MenuItem>
                  <MenuItem onClick={this.handleToggle}>About Us</MenuItem>
                  <MenuItem onClick={this.handleToggle}>Contact Us</MenuItem>
              </Drawer>          			
		</Fragment>
			) 
	}
}
export default withStyles(styles)(Header);