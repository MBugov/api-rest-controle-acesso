const conn = require("../../../shared/db");
const AppError = require("../../../utils/appError")


exports.CreateUserService = (values, callback) => {
    conn.query(
        "INSERT INTO users (name, role) VALUES(?)",
        [values],
        (err, data, fields) => {
            callback(err, data);
        }
    );
}