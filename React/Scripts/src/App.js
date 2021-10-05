import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

//import { inject, observer } from "mobx-react";
//import { appRoutes } from "./config/routes";
//import _ from "lodash"
//import appRootStore from "./stores/app-root.store";
//import { AppTitleComponent } from "./components/common";
//import { Loading } from "./components/common/loading.component";

import Dashboard from './app/component/dashboard/dashboard.jsx';
import User from './app/component/dashboard/users.jsx';
import PageNotFound from './app/component/error/pagenotfound.jsx';
import Profile from './app/component/dashboard/profile.jsx';

class App extends Component {

    constructor(props) {
        super(props)
        //this.props.appRootStore.updateActiveRoute(this.props.location.pathname)
        //this.props.history.listen((location) => {
        //    this.props.appRootStore.updateActiveRoute(location.pathname)
        //});
    }

    render() {
        return (
            <>

                <Suspense fallback={<div className="loading">Loading&#8230;</div>}>
                    <Switch>
                        {/*setting default route*/}
                        <Route exact
                            path="/"
                            render={() => {
                                return (<Redirect to="/dashboard" />)
                            }} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/users" component={User} />
                        <Route exact path="/profile" component={Profile} />
                        {/*    <Redirect to={appRoutes[0].path} />*/}
                        {/*</Route>*/}
                        {/*{_.map(appRoutes, route => (*/}
                        {/*    <Route*/}
                        {/*        key={route.path}*/}
                        {/*        path={route.path}>*/}
                        {/*        <route.component {...this.props} />*/}
                        {/*    </Route>*/}
                        {/*))}*/}
                        <Route path="*" component={PageNotFound}></Route>
                    </Switch>
                </Suspense>
            </>
        );
    }
}

export default withRouter(App);
