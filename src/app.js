import express from 'express';
import {createPool} from 'mysql2/promise';
import {config} from 'dotenv';
import cors from 'cors';
config();

const app=express();

// Crea un pool de conexiones
const pool = createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_DOCKER_PORT
});

// Habilita CORS para permitir solicitudes desde cualquier origen (esto puede ser ajustado según tus necesidades)
app.use(cors());

// Ruta para responder a la solicitud GET en '/'
app.get('/',(req,res)=>{
    res.send("Bienvenido a la API de NodeJS con MySQL y Docker");
});

// Ruta para responder a la solicitud GET en '/ping'
app.get('/ping', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW();');
        console.log(result[0]);
        res.json(result[0]);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// Inicia el servidor en el puerto 3000
const PORT = process.env.NODE_DOCKER_PORT;
app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
