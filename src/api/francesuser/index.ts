import express from 'express'
import {
    create, index, update, remove, register, signin
} from './francesuser.controller';
import * as middleware from '../../middleware';

let userRouter = express.Router();

userRouter.post('/', create);
userRouter.get('/', middleware.isAuthenticated, index)
userRouter.put('/:id', middleware.isAuthenticated, update)
userRouter.delete('/:id', middleware.isAuthenticated, remove)

export default userRouter;
userRouter.post('/register', register)
userRouter.post('/signin', signin)