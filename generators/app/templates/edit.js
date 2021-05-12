import React from "react";
import <%= nameUpper %>Form from "../<%= nameUpper %>Form";

const Edit<%= nameUpper %> = (props) => {
    return <<%= nameUpper %>Form mode="EDIT" param={props.match.params} />;
};

export default Edit<%= nameUpper %>;
