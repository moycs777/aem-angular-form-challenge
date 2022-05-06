import { MapTo } from '@adobe/aem-spa-component-mapping';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
MapTo('angularapp/components/form-container')(FormContainerComponent);
