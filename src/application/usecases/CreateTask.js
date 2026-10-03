import { TaskRepository } from "../../infrastructure/repositories/TaskRepository.js";

export class CreateTask {
    constructor() {
        this.taskRepository = new TaskRepository();
    }

    async execute(taskData) {
        if (!taskData.title || taskData.title.trim() === "") {
            throw new Error("Title is required");
        }

        return await this.taskRepository.create(taskData);
    }
}