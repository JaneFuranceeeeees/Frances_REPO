import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
    console.log("req: ", req.body);
}

import {IAuthRequestBody} from '../../interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../environment';
import userRouter from '.';

export const register = async (req: Request, res: Response) => {
    console.log("req: ", req.body);
    let body = req.body
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(body.password, salt);
        body.salt = salt;
        body.password = hashPass;

        const response = await User.create(body);
        return res.status(201).json({success: response});
    }catch(err){
        return res.status(500).json({message: err})
    }
}

export const signin = async (req: Request, res: Response) => {
    console.log("req", req.body)
    const body: IAuthRequestBody = req.body;

    try{
        if(body.nim && body.password){
            const user = await User.findOne({nim: body.nim});

            if(user){
                const hashPass = bcrypt.hashSync(body.password, user.salt);
                if(bcrypt.compareSync(body.password, hashPass)){
                    const token = jwt.sign({data: user}, config.secret_key, { expiresIn: '1h'});
                    return res.status(200).json({token: token});
                }
            }
        }else{
            throw("Missing required key in body!")
        }
    }catch(err){
        return res.status(500).json({message: err})
    }
}