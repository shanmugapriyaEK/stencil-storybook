import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';
import readme from './readme.md';

storiesOf('Custom Stories/My-Component', module)
.add('Default', () => {
    return '<my-component first="Guest User" last="Don\'t call me a framework\' JS"></my-component>';
}, {
  notes: readme,
})

.add('as dynamic variables', () => {

  const first = text('First name', '');
  const middle = text('Middle name', '');
  const last = text('Last name', '');
  return `<my-component first="${first}" middle="${middle} last="${last}"></my-component>`;
}, {
  notes: readme,
});
