import { AppDataSource } from "../database/data-source.js";
import { Task } from "../../domain/entities/Task.js";

export class TaskRepository {
    constructor() {
        this.repository = AppDataSource.getRepository(Task);
    }

    async getAll() {
        return await this.repository.find();
    }

    async create(taskData) {
        const task = this.repository.create(taskData);
        return await this.repository.save(task);
    }

    async updateStatus(id, status) {
    const task = await this.repository.findOneBy({ id });

    if (!task) {
        throw new Error("Task not found");
    }

    task.status = status;

    return await this.repository.save(task);
}

async delete(id) {
    const task = await this.repository.findOneBy({ id });

    if (!task) {
        throw new Error("Task not found");
    }

    await this.repository.remove(task);

    return task;
}
}