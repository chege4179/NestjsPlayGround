import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('image')
export class ImageEntity {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;
    
    @Column({ name: `imageBase64`,type: 'longtext' })
    imageBase64: string;
    
}
