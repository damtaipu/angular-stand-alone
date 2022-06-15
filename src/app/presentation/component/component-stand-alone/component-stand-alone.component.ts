import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HiglightDirective } from 'src/app/shared/directive/higlight.directive';
import { SquarePipe } from 'src/app/shared/pipe/square.pipe';

@Component({
  selector: 'sta-component-stand-alone',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HiglightDirective,
    SquarePipe
  ],
  templateUrl: './component-stand-alone.component.html',
  styleUrls: ['./component-stand-alone.component.scss']
})

export class ComponentStandAloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
