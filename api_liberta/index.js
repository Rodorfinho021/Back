import express from 'express';
import { retornaCampeonatos, retornaCampeonatosID, retornaCampeonatosAno, retornaCampeonatosTime } from './servico/retornaCampeonatos_servicos.js';
import { cadastraCampeonato } from './servico/cadastroCampeonato_servico.js'; 

const app = express();
app.use(express.json()); // Suporte para JSON no corpo(BODY) da requisição

app.post('/campeonatos', async (req, res) => {
    const campeao = req.body.campeao; //requisão , corpo da requiçao(BODY) , chave de acesso (varivael no DATABASE)
    const vice = req.body.vice;
    const ano = req.body.ano;

    await cadastraCampeonato(campeao, vice, ano);
    res.status(204).end()
})


app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const campeonato = await retornaCampeonatosID(id);
    res.json(campeonato);
});

app.get('/campeonatos', async (req, res) => {
    let campeonatos;
    const ano = req.query.ano;
    const time = req.query.time;

    if (typeof ano === 'undefined' && typeof time === 'undefined') {
        campeonatos = await retornaCampeonatos();
    } else if (typeof ano !== 'undefined') {
        campeonatos = await retornaCampeonatosAno(ano);
    } else if (typeof time !== 'undefined') {
        campeonatos = await retornaCampeonatosTime(time);
    }

    if (campeonatos.length > 0) {
        res.json(campeonatos);
    } else {
        res.status(404).json({ mensagem: "Nenhum campeonato encontrado" });
    }
});

app.listen(9000, () => {
    const data = new Date();
    console.log("Servidor node iniciado em: " + data);
});
