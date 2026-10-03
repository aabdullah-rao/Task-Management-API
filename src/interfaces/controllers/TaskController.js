import { GetTasks } from "../../application/usecases/GetTasks.js";
import { CreateTask } from "../../application/usecases/CreateTask.js";
import { UpdateTaskStatus } from "../../application/usecases/UpdateTaskStatus.js";
import { DeleteTask } from "../../application/usecases/DeleteTask.js";
const getTasksUseCase = new GetTasks();
const createTaskUseCase = new CreateTask();
const updateTaskStatusUseCase = new UpdateTaskStatus();
const deleteTaskUseCase = new DeleteTask();

export const getTasks = async (req, res) => {
    try {
        const tasks = await getTasksUseCase.execute();

        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get tasks"
        });
    }
};

export const createTask = async (req, res) => {
    try {
        const task = await createTaskUseCase.execute(req.body);

        res.status(201).json(task);
        }
         catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const updateTaskStatus = async (req, res) => {
    try {
        const task = await updateTaskStatusUseCase.execute(
            req.params.id,
            req.body.status
        );

        res.json(task);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await deleteTaskUseCase.execute(req.params.id);

        res.json({
            message: "Task deleted successfully",
            task
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};