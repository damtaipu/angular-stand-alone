import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserUseCase } from 'src/app/core/usecases/register-user.usecase';

@Component({
  selector: 'sta-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private registerUser: RegisterUserUseCase) { }

  ngOnInit(): void {
    const user = {
      name: 'João Silva',
      email: 'joao@teste.com'
    };

    this.registerUser.execute(user).subscribe( r => {
      console.log(r)
    })
  }

}
