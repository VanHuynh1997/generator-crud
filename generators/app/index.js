const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
  }

  // first stage
  async prompting() {
    this.log('Generator starting... 🤖');

    this.answers = await this.prompt([
        {
            type: 'input',
            name: 'directory',
            message: 'Input the directory',
            validate: input => Boolean(input.length),
        },
      {
        type: 'input',
        name: 'name',
        message: 'Input the name',
        validate: input => Boolean(input.length),
      },
    ]);
  }

  // second stage
  writing() {
    this.log('Writing files... 📝');
    const { directory, name } = this.answers;
    const capitalizedStr = name.charAt(0).toUpperCase() + name.slice(1);
    const  formName = capitalizedStr.replace(/-/g, '')
      this.fs.copyTpl(
        this.templatePath('component.js'),
        this.destinationPath(`src/views/app-views/${directory}/${name}/add/index.js`),
        {
          name,
        },
      );
      this.fs.copyTpl(
          this.templatePath('component.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/index.js`),
          {
              name,
          },
      );
      this.fs.copyTpl(
          this.templatePath('component.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/edit/index.js`),
          {
            name,
          },
      );
      this.fs.copyTpl(
          this.templatePath('component.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/list/index.js`),
          {
            name,
          },
      );
      this.fs.copyTpl(
          this.templatePath('component.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/view/index.js`),
          {
            name,
          },
      );
      this.fs.copyTpl(
          this.templatePath('component.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/${formName + "Form1"}/index.js`),
          {
            name,
          },
      );
        this.fs.copyTpl(
            this.templatePath('component.js'),
            this.destinationPath(`src/views/app-views/${directory}/${name}/${formName + "Form1"}/GeneralField.js`),
            {
                name,
            },
        );
      this.fs.copyTpl(
        this.templatePath('module.js'),
        this.destinationPath(`src/redux/actions/${capitalizedStr}.js`),
        {
          name,
        },
      );
      this.fs.copyTpl(
          this.templatePath('component.js'),
          this.destinationPath(`src/redux/constants/${capitalizedStr}.js`),
          {
            name,
          },
      );
      this.fs.copyTpl(
          this.templatePath('module.js'),
          this.destinationPath(`src/redux/sagas/${capitalizedStr}.js`),
          {
            name,
          },
      );
      this.fs.copyTpl(
          this.templatePath('component.js'),
          this.destinationPath(`src/redux/reducers/${capitalizedStr}.js`),
          {
            name,
          },
      );
    };

  // last stage
  end() {
    this.log('Bye... 👋');
  }
};