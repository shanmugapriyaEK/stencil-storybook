## Stencil-Storybook

Thanks to Ryan Wheale/DesignByOnyx

I have used the https://github.com/DesignByOnyx/stencil-storybook-starter/ 
and enhanced the storybook with theming, knobs, notes

git clone https://github.com/shanmugapriyaEK/Stencil-Storybook.git
cd Stencil-Storybook
git remote remove origin
npm install
npm run all

### Features
- automatic generation of stories for all components
- automatic notes generation.
- support custom stories
- supports themeing the stories and showing the stencil components
- automatic knobs generation for all `@Props` on your components
    - ability to customize which knobs are used for each prop (though the code does a good job of guessing for strings, numbers, booleans, objects, dates, and colors).
- ability to define multiple states which are rendered on a single page, each with a title, description, and props to use for rendering. A copyable code snippet is also generated for each state (kind of a lightweight chapters implementation)
- ability to define notes for each component (usually you want the generated readme)
- live rebuild/reload of stencil components (it's still a little wonky - sometimes you have to refresh the browser) also comes with the viewport add-on



# Stencil Component Starter

This is a starter project for building a standalone Web Component using Stencil.

Stencil is also great for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).


## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!



## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc
