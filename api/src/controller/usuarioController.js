import {login } from '../repository/usuarioRepository.js'

import { Router  } from "express";
const server = Router();

server.post('/funcionario/login', (req, resp) =>{
    try{
        const {email, senha } = req.body;
        const resposta = await login (email, senha) 
        resp.send(resposta)
    }
    catch (err){

    }
})