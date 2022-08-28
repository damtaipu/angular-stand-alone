import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentStandAloneComponent } from '../../component/component-stand-alone/component-stand-alone.component';
import { RegisterUserUseCase } from 'src/app/core/usecases/register-user.usecase';

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

  constructor(private registerUser: RegisterUserUseCase) { }

  ngOnInit(): void {
    const user = {
      name: 'João Silva',
      email: 'joao@teste.com'
    };

    this.registerUser.execute(user).subscribe(r => {
      console.log(r)
    })
  }

}
