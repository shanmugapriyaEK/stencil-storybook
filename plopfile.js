module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('Component', {
    description: 'Create a stencil JS component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please specify the stencil component Name',
      },
    ],
    actions: [
      // Add all the template files to the source folder
      {
        type: 'add',
        path: 'src/components/\{{kebabCase name}}/\{{kebabCase name}}.tsx',
        templateFile: 'plop/stencilTemplate/component.tsx',
      },
      {
        type: 'add',
        path: 'src/components/\{{kebabCase name}}/\{{kebabCase name}}.css',
        templateFile: 'plop/stencilTemplate/component.css',
      },
      {
        type: 'add',
        path: 'src/components/\{{kebabCase name}}/\{{kebabCase name}}.e2e.ts',
        templateFile: 'plop/stencilTemplate/component.e2e.ts',
      },
      {
        type: 'modify',
        path: 'src/components/\{{kebabCase name}}/\{{kebabCase name}}.tsx',
        pattern: /template-component/g,
        template: '\{{kebabCase name}}',
      },
      {
        type: 'modify',
        path: 'src/components/\{{kebabCase name}}/\{{kebabCase name}}.tsx',
        pattern: /TemplateComponent/g,
        template: '\{{pascalCase name}}',
      },
      {
        type: 'modify',
        path: 'src/components/\{{kebabCase name}}/\{{kebabCase name}}.e2e.ts',
        pattern: /template-component/g,
        template: '\{{kebabCase name}}',
      },
      {
        type: 'modify',
        path: 'src/components/\{{kebabCase name}}/\{{kebabCase name}}.css',
        pattern: /template-component/g,
        template: '\{{kebabCase name}}',
      }
    ]  // array of actions
  });
};
