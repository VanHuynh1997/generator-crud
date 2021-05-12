import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "configs/AppConfig";
import <%= nameUpper %>List from "./list";
import Add<%= nameUpper %> from "./add";
import Edit<%= nameUpper %> from "./edit";
import <%= nameUpper %>Details from "./view";

const <%= nameUpper %> = (props) => {
    const { match } = props;
    return (
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
            <Route path={`${match.url}/list`} component={<%= nameUpper %>List} />
            <Route path={`${match.url}/add`} component={Add<%= nameUpper %>} />
            <Route path={`${match.url}/edit/:id`} component={Edit<%= nameUpper %>} />
            <Route
                path={`${match.url}/view/:viewId`}
                component={<%= nameUpper %>Details}
            />
            <Redirect
                path="*"
                exact={true}
                from={`${match.url}`}
                to={`${AUTH_PREFIX_PATH}/error`}
            />
        </Switch>
    );
};

export default <%= nameUpper %>;
