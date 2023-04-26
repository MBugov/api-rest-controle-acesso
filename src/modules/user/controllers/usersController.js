const AppError = require("../../../utils/appError");
const conn = require("../../../shared/db");
const createUserService = require("../services/create-user-service");
const deleteUserService = require("../services/delete-user-service");

exports.getAllUsers = (req, res, next) => {
    conn.query(
        "SELECT * FROM users",
        function (err, data, fields) {
            if (err) return next(new AppError(err))
            res.status(200).json({
                status: "success",
                length: data?.length,
                data: data,
            });
        });
};

exports.createUsers = (req, res, next) => {
    //if (!req.body || req.body.data == null) return next(new AppError("Sem dados fornecidos", 404));
    const { name, role } = req.body;
    const values = [name, role];
    createUserService.CreateUserService(values, (err, data) => {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
            status: "success",
            message: "Criado com sucesso!",
            affectedRows: data.affectedRows,
            data: values
        });
    });
};

exports.deleteUsersController = (req, res, next) => {
    const id = req.query["id"];
    deleteUserService.DeleteUserService(id, (err, data) => {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
            status: "success",
            message: "Removido com sucesso!",
            affectedRows: data.affectedRows,
        });
    });
};