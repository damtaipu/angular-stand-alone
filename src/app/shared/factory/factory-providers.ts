import { RegisterUserRepository } from "src/app/core/repositories/register-user.repository";
import { RegisterUserUseCase } from "src/app/core/usecases/register-user.usecase";
import { DataRegisterUserRepository } from "src/app/data/repository/register-user.repository";

export const FactoryProviders =  {
    // Registro de usuários
    userRegister: {
        provider: RegisterUserUseCase,
        override: {
            provide: RegisterUserRepository,
            useClass: DataRegisterUserRepository
        }
    }
};