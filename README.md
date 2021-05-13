# Getting Started with Yeoman

## Available Scripts

Run the following command in your terminal:
### `yarn global add yo@latest`

**Tip: We’re using yarn in this example but you may also use `npm`.**

### `mkdir generator-example cd generator-example`

**Note: A generator is just a node module. 
There are a lot of publicly available generators that you may use. 
We’ll be creating a generator from scratch in this post. 
To start, create a new directory named as generator-example. 
Yeoman relies on the file system to find generators, 
therefore the name should always start with `generator-`.**


Next initialize the project with:

### `yarn init -y`

Next, add yeoman-generator as a dependency:

### `yarn add yeoman-generator`

Running the generator locally:

The generator can be run locally using the link feature of `yarn` or `npm`. 
This will create a symlink to the project and let us run it without publishing to `npm`.

From the project root run:

### `yarn link`

From your project:

### `yo example`

**Note: `example` is name should always start with `generator-`.**

# Getting Started with Yeoman generator use for react js

## Input directory and name

###`Input the directory` input directory for `views/app-views`

 **Input the directory: `general-manager`**

###`Input the name` input directory for `views/app-views/general-manager`

 **Input the name: `company`**

## Configuration for project

### From `general-manager/index.js`

```
<Route path={`${match.url}/company`} 
component={lazy(() => import(`./company`))} 
/>
```

### From `sagas/index.js`

```
import { all } from "redux-saga/effects";
import Company from "./Company";
export default function* rootSaga(getState) {
yield all([
Company(),
]);
} 
```

### From `reducers/index.js`

```
import { combineReducers } from "redux";
import Company from "./Company";
const reducers = combineReducers({
Company: Company,
});
export default reducers;
```

### From `lang/en_US.js`

```
import antdEnUS from "antd/es/locale/en_US";
import enCompany from "../locales/en/Company.json";
const EnLang = {
antd: antdEnUS,
locale: "en-US",
messages: {
...enCompany
},
};
export default EnLang;
```
### From `lang/vi_VN.js`

```
import antdEnUS from "antd/es/locale/vi_VN";
import viCompany from "../locales/vi/Company.json";
const ViLang = {
antd: antdViVN,
locale: "vi-VN",
messages: {
...viCompany
},
};
export default ViLang;
```
  
