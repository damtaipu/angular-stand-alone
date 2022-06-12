import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentStandAloneComponent } from './presentation/component/component-stand-alone/component-stand-alone.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, 
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'stand-alone';
}
