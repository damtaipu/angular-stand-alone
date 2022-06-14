import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { ReturnDataModel } from "../domain/return-data.model";
import { SendRegisterUser } from "../domain/send-data.model";
import { RegisterUserRepository } from "../repositories/register-user.repository";

@Injectable({
    providedIn: 'root'
})

export class RegisterUserUseCase implements UseCase<SendRegisterUser, ReturnDataModel> {
    constructor(private registerRpository: RegisterUserRepository) { }

    execute(param: SendRegisterUser): Observable<ReturnDataModel> {
        return this.registerRpository.registerUser(param);
    }
}