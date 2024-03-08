const tasksModel = require('../models/tasksModel');

const getAll = async (_request, response) => {
    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks);
};

const newTask = async (request, response) => {
    const addedTask = await tasksModel.newTask(request.body);
    return response.status(201).json(addedTask);
};

const deleteTask = async (request, response) => {
    const {id} = request.params;

    await tasksModel.deleteTask(id);
    return response.status(204).json();
};

const updateTask = async (request, response) => {
    const {id} = request.params;

    await tasksModel.updateTask(id, request.body);
    return response.status(204).json();
};

module.exports = {
    getAll,
    newTask,
    deleteTask,
    updateTask
};