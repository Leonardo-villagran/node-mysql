import express from 'express';
import {createPool} from 'mysql2/promise';
import {config} from 'dotenv';
config();

const app=express();

// Crea un pool de conexiones
const pool = createPool({
    host: process.env.MYSQL_HOST,
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    port: process.env.MYSQL_DOCKER_PORT
});


// createConnection returns a Promise

app.get('/',(req,res)=>{
    res.send("Bienvenido a la API de NodeJS con MySQL");
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
