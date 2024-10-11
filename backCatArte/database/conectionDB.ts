import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { DB_DEV_NAME, DB_USER , DB_PASSWORD , DB_HOST, DB_PORT, DB_TEST_NAME, NODE_ENV } from '../config';
                          
const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME;

// aqui cambia el mongo
const connectionDb = new Sequelize( DB_NAME , DB_USER, DB_PASSWORD , {
  host: DB_HOST ,
  dialect: 'mysql',
  port: Number(DB_PORT) || 3306,
  define: {
    timestamps: false,
  },
});

export default connectionDb;