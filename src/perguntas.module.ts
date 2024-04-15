import { Module } from '@nestjs/common';
import { PerguntasController } from './perguntas.controller'; // Importe o controlador de perguntas
import { PerguntasService } from './perguntas.service'; // Importe o serviço de perguntas
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pergunta } from './pergunta.entity'; // Importe a entidade de perguntas

@Module({
    imports: [TypeOrmModule.forFeature([Pergunta])], // Configure o TypeOrmModule para a entidade de perguntas
    controllers: [PerguntasController], // Defina o controlador de perguntas
    providers: [PerguntasService], // Defina o serviço de perguntas
})
export class PerguntasModule {} // Exporte o módulo de perguntas
