import pool from "./conexao.js";

export async function retornaCampeonatos() {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos';
    const campeonatos = await executaQuery(conexao, query);
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosID(id) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos WHERE id = ?';
    const campeonatos = await executaQuery(conexao, query, [id]);
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosAno(ano) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos WHERE ano = ?';
    const campeonatos = await executaQuery(conexao, query, [ano]);
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosTime(time) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao = ?';
    const campeonatos = await executaQuery(conexao, query, [time]);
    conexao.release();
    return campeonatos;
}

async function executaQuery(conexao, query, params = []) {
    const resultado_query = await conexao.execute(query, params);
    const resposta = resultado_query[0];
    return resposta;
}
