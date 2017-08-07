import { Component, OnInit } from '@angular/core';
// import { IgxList, IgxListItem, IgxFilterOptions, IgxInput, IgxIcon, IgxAvatar } from 'igniteui-js-blocks/main';
import { Contacts } from '../localData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  public listSearch: string;
  private contacts: object[] = Contacts;

  constructor() { }

  ngOnInit() {
  }

}