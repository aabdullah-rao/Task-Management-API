import { EntitySchema } from "typeorm";

export const Task = new EntitySchema({
    name: "Task",

    tableName: "tasks",

    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },

        title: {
            type: "varchar",
            length: 150
        },

        description: {
            type: "text",
            nullable: true
        },

        status: {
            type: "varchar",
            length: 20,
            default: "pending"
        },

        createdAt: {
            type: "timestamp",
            createDate: true
        },

        updatedAt: {
            type: "timestamp",
            updateDate: true
        }
    }
});