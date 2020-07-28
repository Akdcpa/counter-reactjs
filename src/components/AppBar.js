import React, { Component } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { makeStyles } from '@material-ui/core/styles';

import {
    AppBar as Header,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core/' 

import MenuIcon from '@material-ui/icons/Menu';

class AppBar extends Component {
    render() { 
        return (
            <div style={styles.root} >
                 <Header position="static">
                    <Toolbar> 
                    <Typography variant="h6" style={styles.title}>
                        Counter
                    </Typography>
                        <IconButton color="inherit">
                            <ShoppingCartOutlinedIcon style={styles.cardIcon}>
                            </ShoppingCartOutlinedIcon>
                        </IconButton>
                    <Typography  >{this.props.count}</Typography>
                    </Toolbar>
                </Header>   
            </div>
        );
    }
}
 
const styles = {
    root: {
        flexGrow: 1,
      }, 
      title: {
        flexGrow: 1,
      },
      cardIcon:{
        fontSize:50
      }
}
export default AppBar;