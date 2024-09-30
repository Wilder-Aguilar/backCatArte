import conectionDB from './database/conectionDB.js'; // Import database connection
import catMeme from './models/catModel.js';  // Import model from table Meme
import express from 'express';
import cors from 'cors';
import { router } from './routers/catRouter.js';
import { PORT } from './config.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router); // Prefijo /api para todas las rutas

const startServer = async () => {
  try {
    await conectionDB.authenticate();  // Authenticate the database
    console.log('Conexión a la base de datos exitosa');

    // Fetch all memes from the database
    await catMeme.sync({ force: false });
    console.log('Tabla de memes creada');

    app.listen(PORT || 3000, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar o consultar la base de datos 😒:', error);
  }
};

startServer();
