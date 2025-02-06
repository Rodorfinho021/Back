import pool from "./conexao.js";

export async function cadastraCampeonato(campeao, vice, ano) {
    const conexao = await pool.getConnection(); //Faz conexao com bando de dados

    const resposta = await conexao.query('INSERT INTO campeonatos (campeao, vice, ano) VALUES (?,?,?)', [campeao,vice, ano]); //Fazendo a linha de código pro SE   
    console.log(resposta);
    conexao.release(); //Devolvendo conexao pro pool
}