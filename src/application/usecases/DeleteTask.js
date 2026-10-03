import { TaskRepository } from "../../infrastructure/repositories/TaskRepository.js";

export class DeleteTask {
    constructor() {
        this.taskRepository = new TaskRepository();
    }

    async execute(id) {
        return await this.taskRepository.delete(id);
    }
}