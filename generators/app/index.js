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
    const action = name.toUpperCase().replace(/-/g, '_')

      const splitStr = name.toLowerCase().split('-');
      for (let i = 0; i < splitStr.length; i++) {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      const nameUpper = splitStr.join('');
      // this.fs.copyTpl(
      //     this.templatePath('ParentIndex.js'),
      //     this.destinationPath(`src/views/app-views/${directory}/index.js`),
      //     {
      //         name,action,nameUpper,directory
      //     },
      // );
      this.fs.copyTpl(
          this.templatePath('RouteIndex.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/index.js`),
          {
              name,action,nameUpper,directory
          },
      );
      this.fs.copyTpl(
        this.templatePath('add.js'),
        this.destinationPath(`src/views/app-views/${directory}/${name}/add/index.js`),
        {
          name,action,nameUpper,directory
        },
      );
      this.fs.copyTpl(
          this.templatePath('edit.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/edit/index.js`),
          {
            name,action,nameUpper,directory
          },
      );
      this.fs.copyTpl(
          this.templatePath('list.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/list/index.js`),
          {
            name,action,nameUpper,directory
          },
      );
      this.fs.copyTpl(
          this.templatePath('view.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/view/index.js`),
          {
            name,action,nameUpper,directory
          },
      );
      this.fs.copyTpl(
          this.templatePath('DetailsView.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/view/DetailsView.js`),
          {
              name,action,nameUpper,directory
          },
      );
      this.fs.copyTpl(
          this.templatePath('FormIndex.js'),
          this.destinationPath(`src/views/app-views/${directory}/${name}/${nameUpper + "Form"}/index.js`),
          {
            name,action,nameUpper,directory
          },
      );
        this.fs.copyTpl(
            this.templatePath('GeneralField.js'),
            this.destinationPath(`src/views/app-views/${directory}/${name}/${nameUpper + "Form"}/GeneralField.js`),
            {
                name,action,nameUpper,directory
            },
        );
      this.fs.copyTpl(
          this.templatePath('english.js'),
          this.destinationPath(`src/lang/locales/en/${nameUpper}.json`),
          {
              name,action,nameUpper,directory
          },
      );
      this.fs.copyTpl(
          this.templatePath('vietnamese.js'),
          this.destinationPath(`src/lang/locales/vi/${nameUpper}.json`),
          {
              name,action,nameUpper,directory
          },
      );
      this.fs.copyTpl(
          this.templatePath('services.js'),
          this.destinationPath(`src/services/${nameUpper + "Services"}.js`),
          {
              name,action,nameUpper,directory
          },
      );
      this.fs.copyTpl(
        this.templatePath('actions.js'),
        this.destinationPath(`src/redux/actions/${nameUpper}.js`),
        {
          name,action,nameUpper,directory
        },
      );
      this.fs.copyTpl(
          this.templatePath('constants.js'),
          this.destinationPath(`src/redux/constants/${nameUpper}.js`),
          {
            name,action,nameUpper,directory
          },
      );
      this.fs.copyTpl(
          this.templatePath('sagas.js'),
          this.destinationPath(`src/redux/sagas/${nameUpper}.js`),
          {
            name,action,nameUpper,directory
          },
      );
      this.fs.copyTpl(
          this.templatePath('reducers.js'),
          this.destinationPath(`src/redux/reducers/${nameUpper}.js`),
          {
            name,action,nameUpper,directory
          },
      );
    };

  // last stage
  end() {
    this.log('Bye... 👋');
  }
};