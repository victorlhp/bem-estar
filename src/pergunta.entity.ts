import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pergunta {
    
    @PrimaryGeneratedColumn()
    id: number;   

    @Column()
    texto: string;

    // @Column()
    // opcao1: string;

    // @Column()
    // opcao2: string;
        
}
