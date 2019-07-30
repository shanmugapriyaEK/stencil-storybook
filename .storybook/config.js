import { addParameters, configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import customTheme from './themes/customTheme';
import buildStencilStories from './stories/stencil';

// Config
addParameters({
    options: {
        panelPosition: 'bottom',
        theme: customTheme,
    }
});
addDecorator(withKnobs);
addDecorator(withA11y);

// automatically import all files ending in *.stories.js
const reqSrcStories = require.context('../src', true, /.stories.js$/);
// const reqExternalStories = require.context('../stories', true, /.stories.js$/);
const COLLECTIONS = [
  {
    name: 'Stencil Components',
    loader: require('../loader/index.cjs.js'),
    componentsCtx: require.context('../dist/collection', true, /\/components\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src', true, /\.stories\.tsx$/),
    notesCtx: require.context('../src', true, /\.md$/ )
  }
];

// Add global decorators
const loadStories = () => {
  reqSrcStories.keys().forEach(filename => reqSrcStories(filename));
  COLLECTIONS.forEach(({ name, loader, componentsCtx, storiesCtx, notesCtx}) => {
    buildStencilStories(name, loader, componentsCtx, storiesCtx, notesCtx);
  });
  // reqExternalStories.keys().forEach(filename => reqExternalStories(filename));
};

configure(loadStories, module);
