import { TaskRepository } from "../../infrastructure/repositories/TaskRepository.js";

export class GetTasks {
    constructor() {
        this.taskRepository = new TaskRepository();
    }

    async execute() {
        return await this.taskRepository.getAll();
    }
}