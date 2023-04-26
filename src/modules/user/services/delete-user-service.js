const conn = require("../../../shared/db");


exports.DeleteUserService = (id, callback) => {
    conn.query("DELETE FROM users WHERE id LIKE(?)",[id],
    (err,data,fields) => {
        callback(err, data)
    });
}