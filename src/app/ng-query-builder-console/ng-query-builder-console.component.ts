import { Component, Input, OnInit } from '@angular/core';
import { QueryBuilderConfig } from 'ngx-angular-query-builder';

@Component({
  selector: 'app-ng-query-builder-console',
  templateUrl: './ng-query-builder-console.component.html',
  styleUrls: ['./ng-query-builder-console.component.scss']
})
export class NgQueryBuilderConsoleComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() isDisabled= false;
  dirty=true;

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
  initRules():void{

  }
  onSetFilterCriteria():void{
    
  }
}
