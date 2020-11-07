import express from 'express'
import {
    create,
} from './francesuser.controller';

let userRouter = express.Router();

userRouter.post('/', create);

export default userRouter;