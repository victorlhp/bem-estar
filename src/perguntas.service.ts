import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pergunta } from './pergunta.entity'; // Importe a entidade Pergunta

@Injectable()
export class PerguntasService {
  constructor(
    @InjectRepository(Pergunta)
    private perguntasRepository: Repository<Pergunta>,
  ) {}

  // Retorna uma Promise que resolve em uma lista de todas as perguntas no banco de dados
  findAll(): Promise<Pergunta[]> {
    return this.perguntasRepository.find();
  }

  // Retorna uma Promise que resolve em uma única pergunta com o ID especificado
  findOne(id: number): Promise<Pergunta | undefined> {
    return this.perguntasRepository.findOneBy({id});
  }

  // Cria uma nova pergunta no banco de dados com os dados fornecidos
  async create(perguntaData: Partial<Pergunta>): Promise<Pergunta> {
    const pergunta = this.perguntasRepository.create(perguntaData);
    return this.perguntasRepository.save(pergunta);
  }

  // Atualiza os dados de uma pergunta no banco de dados com base no ID especificado
  async update(id: number, perguntaData: Partial<Pergunta>): Promise<Pergunta | undefined> {
    await this.perguntasRepository.update(id, perguntaData);
    return this.findOne(id);
  }

  // Remove uma pergunta do banco de dados com base no ID especificado e retorna um booleano indicando se a remoção foi bem-sucedida
  async remove(id: number): Promise<boolean> {
    const result = await this.perguntasRepository.delete(id);
    return result.affected > 0;
  }
}
