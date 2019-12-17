import { Component, OnInit, Optional } from '@angular/core';

import { OptionalExampleService } from './optional-example.service';

@Component({
  selector: 'app-optional-example',
  templateUrl: 'optional-example.component.html'
})
export class OptionalExampleComponent implements OnInit {

  value: string;

  constructor(@Optional() private service: OptionalExampleService) {}

  ngOnInit(): void {
    this.value = this.service.getValue();
  }
}

