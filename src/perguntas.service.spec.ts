import { Test, TestingModule } from '@nestjs/testing';
import { PerguntasService } from './perguntas.service'; // Importe o serviço de perguntas

describe('PerguntasService', () => { // Renomeie para PerguntasService
  let service: PerguntasService; // Renomeie para PerguntasService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerguntasService], // Use PerguntasService como provedor de serviço
    }).compile();

    service = module.get<PerguntasService>(PerguntasService); // Use PerguntasService para obter o serviço
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
