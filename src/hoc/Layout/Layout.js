import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    
    state={
        showSideDrawer: false
    }

    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    
    render(){
        return(
        <Aux>
            <div>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
                Backdrop
            </div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    };
};
export default Layout;