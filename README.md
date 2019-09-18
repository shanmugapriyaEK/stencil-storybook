## Stencil-Storybook

Thanks to Ryan Wheale/DesignByOnyx

I have used the https://github.com/DesignByOnyx/stencil-storybook-starter/ 
and enhanced the storybook with theming, knobs, notes
```bash
git clone https://github.com/shanmugapriyaEK/Stencil-Storybook.git
cd Stencil-Storybook
git remote remove origin
npm install
npm run all
```

### Features
- automatic generation of default stencil component using cmd `npm run generate`
- automatic generation of stories for all components
- automatic notes generation.
- support custom stories
- supports theming the stories and showing the stencil components
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


#### Initial Setup

```bash
npm install
npm start
```

#### Building the application:

```bash
npm run build
```

#### Developement Mode:

```bash
npm run start
```

#### Unit test the components:

```bash
npm test
```

#### Generate Stencil component

```bash
npm run generate
```

Please provide the component name when prompted

#### Build stencil and storybook concurrently

```bash
npm run all
```
Need help? Check out the docs [here](https://stenciljs.com/docs/my-first-component).

# Storybook

Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.

Storybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements.

Storybook also supports a lot of addons and comes with a flexible API to customize Storybook as desired. A Static version of Storybook can also be built and deployed to an HTTP server.# Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!


#### To run the storybook:

```bash
npm run storybook
npm run all
```

### Note on Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!



