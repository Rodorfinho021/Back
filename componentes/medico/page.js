// pages/medicos.js
'use client'

import React, { useState, useEffect } from 'react';

export default function Medicos() {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cors = require('cors');

  app.use(cors({
    origin: 'http://localhost:3000', // Coloque aqui o domínio que irá acessar sua API
    methods: ['GET'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  }));


  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const res = await fetch('https://back-end-ii-3xed.onrender.com/medicos');
        if (!res.ok) {
          throw new Error('Falha ao buscar dados');
        }
        const data = await res.json();
        setMedicos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicos();
  }, []);


  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h1>Lista de Médicos</h1>
      <ul>
        {medicos.map((medico) => (
          <li key={medico.id}>
            <strong>{medico.nome}</strong><br />
            Telefone: {medico.telefone}<br />
            Especialidade: {medico.especialidade}
          </li>
        ))}
      </ul>
    </div>
  );
}
