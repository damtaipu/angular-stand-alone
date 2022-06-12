import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentStandAloneComponent } from '../../component/component-stand-alone/component-stand-alone.component';

@Component({
  selector: 'sta-about',
  standalone: true,
  imports: [
    CommonModule,
    ComponentStandAloneComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
