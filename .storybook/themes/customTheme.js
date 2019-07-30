import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#7e57c2',
  colorSecondary: '#000000',

  // UI
  appBg: '#fafafa',
  appContentBg: '#fafafa',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: '#7e57c2',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My Storybook',
});
