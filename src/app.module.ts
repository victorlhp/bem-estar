import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerguntasModule } from './perguntas.module'; // Importe o módulo de perguntas
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pergunta } from '././pergunta.entity'; // Importe a entidade de perguntas

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-co1gfq7109ks738go3sg-a.oregon-postgres.render.com',
      port: 5432,
      username: 'banco_teste_0s9c_user',
      password: 'NWmQnVAvRKtXLVUj0Hkd02QCAAX9l9Iw',
      database: 'banco_teste_0s9c',
      entities: [Pergunta], // Use a entidade Pergunta
      synchronize: true,
      ssl: true,
    }),
    PerguntasModule, // Use o módulo de perguntas
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
