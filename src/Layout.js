import React, { Component } from 'react'
import { Container, TitleBar, Button, Sheet, Panel } from '@sencha/ext-modern';
import { Transition} from '@sencha/ext-react-transition';

import { Switch, Route, withRouter } from 'react-router-dom'
import { medium, large } from './responsiveFormulas';
import Home from './Home/Home';
import NavMenu from './NavMenu';
var REACT_VERSION = require('react').version

/**
 * The main application view and routes
 */
class Layout extends Component {

    title = "Login Application";
    footer = "Ext JS version: 6.6.0.33";

    state = {
        showAppMenu: true
    }

    toggleAppMenu = () => {
        this.setState({ showAppMenu: !this.state.showAppMenu });
    }

    onHideAppMenu = () => {
        this.setState({ showAppMenu: false });
    }

    navigate = (path) => {
        this.setState({ showAppMenu: false });
        this.props.history.push(path);
    }

    render() {
        const { showAppMenu } = this.state;
        const { location } = this.props;

        const navMenuDefaults = {
            onItemClick: this.navigate,
            selection: location.pathname
        }

        return (
            <Container fullscreen layout="fit">
                <TitleBar title={this.title} docked="top" titlebar-font-size={28}>
                    {Ext.platformTags.phone && (
                        <Button align="left" iconCls="x-fa fa-bars" handler={this.toggleAppMenu} ripple={false}/>
                    )}
                </TitleBar>
                  <Switch>
                    <Route path="/" component={Home} exact/>
                  </Switch>
                <TitleBar title={this.footer} docked="bottom">
                    {Ext.platformTags.phone && (
                        <Button align="left" iconCls="x-fa fa-bars" handler={this.toggleAppMenu} />
                    )}
                </TitleBar>
            </Container>
        );
    }
}

export default withRouter(Layout);
