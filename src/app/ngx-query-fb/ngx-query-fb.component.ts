import { Component, Input, OnInit } from '@angular/core';
import { QueryBuilderConfig,Rule,RuleSet,QueryBuilderClassNames } from 'ngx-angular-query-builder';

@Component({
  selector: 'app-ngx-query-fb',
  templateUrl: './ngx-query-fb.component.html',
  styleUrls: ['./ngx-query-fb.component.scss']
})
export class NgxQueryFbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() classNames: QueryBuilderClassNames = {
    removeButton: "fd-button fd-button--transparent is-cozy",
    removeIcon:"fd-icon sap-icon--delete"
  };
  
    @Input() query = {
      root: true,
      condition: 'and',
      rules: [
        {
          condition: 'and',
          rules: [AllAccountsRule],
        },
      ],
    };
  
    @Input() config: QueryBuilderConfig = {
      addRuleSet: this.addRuleSet.bind(this),
      removeRule:this.removeRule.bind(this),
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
        UID: {
          name: 'uid',
          type: 'all-accounts',
          operators: ['is not null'],
          defaultOperator: 'is not null',
        },
      },
    };
  
    // getClassNames(...args): string {
    //   const clsLookup = this.classNames
    //     ? this.classNames
    //     : this.defaultClassNames;
    //   const classNames = args
    //     .map((id) => clsLookup[id] || this.defaultClassNames[id])
    //     .filter((c) => !!c);
    //   return classNames.length ? classNames.join(' ') : null;
    // }
  
    onQueryBuilderChange($event) {
      console.log($event);
    }
  
    log(event?: any): void {
      console.log(event);
    }
  
    addRuleSet(parent?: RuleSet): void {
      parent.rules = parent.rules.concat([
        {
          condition: 'and',
          rules: [AllAccountsRule],
        },
      ]);
    }
    removeRule(rule: Rule, parent?: RuleSet): void {
      parent.rules = parent.rules = parent.rules.filter((r) => r !== rule);
      if(parent.rules.length === 0)
      {
        this.query.rules = this.query.rules.filter((r) => r !== parent);
      }
    }

  }
  const AllAccountsRule = {
    field: 'UID',
    operator: 'is not null',
  };
