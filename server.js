//FUNÇÃO DO ARQUIVO: INICIALIZAR O SERVIDOR EM NODE JS

const app = require("./src/app");
const PORT = process.env.PORT;
//3030,3333,6060,6666,8080,8000



//console.log(app);

// app.listen(PORTA, Funcao anonima)
app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}`)
});