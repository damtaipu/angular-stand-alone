import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserUseCase } from 'src/app/core/usecases/register-user.usecase';
import { FactoryProviders } from 'src/app/shared/factory/factory-providers';



@Component({
  selector: 'sta-home',
  standalone: true,
  imports: [CommonModule],
  providers: [
    FactoryProviders.userRegister.provider,
    FactoryProviders.userRegister.override
  ],
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
