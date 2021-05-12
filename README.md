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

From my project:

### `yo example`

**Note: `example` is name should always start with `generator-`.

