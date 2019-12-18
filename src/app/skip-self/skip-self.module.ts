import { Component, Inject, InjectionToken } from '@angular/core';

export const Token: InjectionToken<string> = new InjectionToken<string>('SOME_TOKEN');

@Component({
  selector: 'app-parent',
  template: '<h4>Parent value: {{textValue}}</h4><app-child></app-child>',
  providers: [{ provide: Token, useValue: 'Hello from Parent' }]
})
export class ParentComponent {
  constructor(@Inject(Token) readonly textValue: string) {}
}


@Component({
  selector: 'app-child',
  template: '<h3>Text: {{text}}</h3>',
  providers: [{ provide: Token, useValue: 'Hello from Child' }]
})
export class ChildComponent {
  text: string;

  constructor(@Inject(Token) private textValue: string) {
    this.text = textValue;
  }
}
