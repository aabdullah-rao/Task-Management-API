import { TaskRepository } from "../../infrastructure/repositories/TaskRepository.js";

export class UpdateTaskStatus {
    constructor() {
        this.taskRepository = new TaskRepository();
    }

    async execute(id, status) {
        if (status !== "pending" && status !== "completed") {
            throw new Error("Status must be pending or completed");
        }

        return await this.taskRepository.updateStatus(id, status);
    }
}