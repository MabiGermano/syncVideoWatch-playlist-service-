import express from 'express'
import cors from 'cors'
import routes from './routes'
import * as dotenv from 'dotenv';
import './database/connection';

const app = express()

app.use(cors({origin: process.env.PLAYER_SERVER}))
app.use(express.json())
app.use(routes)
app.listen('3334', () => console.log('ouvindo 0 3334'))