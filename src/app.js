const express = require('express');
const cors = require("cors");
const router = require("./routes/usersRoutes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

const app = express();

/* 
* Permite trabalhar com as requisições em JSON.
*/
app.use(express.json());

/*
* Chama as rotas.
*/
app.use("/api", router);

/*
* Tratativa de erros sobre as URLs.
*/
app.all("*", (req, res, next) => {
    next(new AppError(`A URL ${req.originalUrl} não existe`, 404));
});

app.use(errorHandler);

const PORT = 4000;
app.listen(PORT,() => {
    console.log(`✅ Servidor rodando na porta ${PORT}.`)
})