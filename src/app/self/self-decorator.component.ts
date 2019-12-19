import { Component, Host, Inject, InjectionToken, NgModule, Self, SkipSelf } from '@angular/core';

export const Token: InjectionToken<string> = new InjectionToken<string>('SOME_TOKEN');

@Component({
  selector: 'app-child',
  template: '<h3>Text: {{textValue}}</h3>',
  // providers: [{ provide: Token, useValue: 'Hello from Child' }]
})
export class ChildComponent {
  constructor(@Self() @Inject(Token) readonly textValue: string) {}
}

@NgModule({
  providers: [{ provide: Token, useValue: 'Hello from ChildModule' }],
  declarations: [ChildComponent],
  exports: [ ChildComponent ]
})
export class ChildModule {}

@Component({
  selector: 'app-parent',
  template: '<h4>Parent value: {{textValue}}</h4><app-child></app-child>',
  providers: [{ provide: Token, useValue: 'Hello from Parent' }]
})
export class ParentComponent {
  constructor(@Inject(Token) readonly textValue: string) {}
}




@NgModule({
  imports: [ChildModule],
  providers: [{provide: Token, useValue: 'Hello from Parent Module'}],
  exports: [ParentComponent],
  declarations: [ParentComponent]
})
export class ParentModule {}

