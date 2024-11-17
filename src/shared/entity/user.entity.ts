import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Users')
export class UserEntity {
    @PrimaryColumn({ name: 'id', unique: true })
    id: number;

    @Column({ name: `name` })
    name: string;

    @Column({ name: `email` })
    email: string;

    @Column({ name: `password`, default: null })
    password: string;

    @Column({ name: `createdAt`, default: null })
    createdAt: string;
}
