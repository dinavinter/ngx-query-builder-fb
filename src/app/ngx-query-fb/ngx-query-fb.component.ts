import { Component, Input, OnInit } from '@angular/core';
import { QueryBuilderConfig } from 'ngx-angular-query-builder';

@Component({
  selector: 'app-ngx-query-fb',
  templateUrl: './ngx-query-fb.component.html',
  styleUrls: ['./ngx-query-fb.component.scss']
})
export class NgxQueryFbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() query = {
    root: true,
    condition: 'and',
    rules: [
      {
        condition: 'or',
        rules: [
          { field: 'age', operator: '=', value: 4 },
          { field: 'age', operator: '>', value: 20 },
        ],
      },
      {
        condition: 'and',
        rules: [{ field: 'gender', operator: '=', value: 'f' }],
      },
    ],
  };

  @Input() config: QueryBuilderConfig = {
    fields: {
      age: { name: 'Age', type: 'number' },
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          { name: 'Male', value: '' },
          { name: 'Female', value: 'f' },
        ],
      },
      foo: {
        name: 'Foo',
        type: 'object',
        operators: ['between', 'less', 'bigger'],
        defaultValue: [],
      },
    },
  };

  onQueryBuilderChange($event) {
    console.log($event);
  }

  log(event?: any): void {
    console.log(event);
  }
}
