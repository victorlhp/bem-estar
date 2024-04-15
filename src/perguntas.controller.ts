import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { Pergunta } from './pergunta.entity'; // Importe a entidade de perguntas
import { PerguntasService } from './perguntas.service'; // Importe o serviço de perguntas

@Controller('perguntas') // Use 'perguntas' como o prefixo para as rotas
export class PerguntasController {
    constructor(private perguntasService: PerguntasService) {} // Injete o serviço de perguntas

    @Get() // Rota para buscar todas as perguntas
    async findAll(): Promise<Pergunta[]> {
        return this.perguntasService.findAll();
    }

    @Get(':id') // Rota para buscar uma pergunta por ID
    async findOne(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
        const pergunta = await this.perguntasService.findOne(id);
        if (pergunta) {
            response.status(HttpStatus.OK).json(pergunta);
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id') // Rota para deletar uma pergunta por ID
    async delete(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
        const deleted = await this.perguntasService.remove(id);
        if (deleted) {
            response.status(HttpStatus.NO_CONTENT).send();
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post() // Rota para criar uma nova pergunta
    async create(@Body() perguntaData: Partial<Pergunta>, @Res() response: Response) {
        const pergunta = await this.perguntasService.create(perguntaData);
        response.status(HttpStatus.CREATED).json(pergunta);
    }

    @Put(':id') // Rota para atualizar uma pergunta por ID
    async update(@Param('id', ParseIntPipe) id: number, @Body() perguntaData: Partial<Pergunta>, @Res() response: Response) {
        const updatedPergunta = await this.perguntasService.update(id, perguntaData);
        if (updatedPergunta) {
            response.status(HttpStatus.OK).json(updatedPergunta);
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
