import { Observable } from "rxjs";
import { ReturnDataModel } from "../domain/return-data.model";
import { SendRegisterUser } from "../domain/send-data.model";

export abstract class RegisterUserRepository {
    abstract registerUser(param: SendRegisterUser): Observable<ReturnDataModel>
}