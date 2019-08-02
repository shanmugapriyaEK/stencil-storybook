import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'template-component',
  styleUrl: 'template-component.css'
})
export class TemplateComponent {
  /**
   * Input name
   */
  @Prop() name: string;


  render() {
    return <div>Hello, World! I'm {this.name}</div>;
  }
}
