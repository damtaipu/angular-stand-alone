import { map, Observable, of } from "rxjs";
import { ReturnDataModel } from "src/app/core/domain/return-data.model";
import { SendRegisterUser } from "src/app/core/domain/send-data.model";
import { RegisterUserRepository } from "src/app/core/repositories/register-user.repository";

export class DataRegisterUserRepository extends RegisterUserRepository {
    registerUser(param: SendRegisterUser): Observable<ReturnDataModel> {
        return of({
            code: 200,
            data: [{
                message: 'Sucesso'
            }]
        }).pipe(map( r => r))
    }
}