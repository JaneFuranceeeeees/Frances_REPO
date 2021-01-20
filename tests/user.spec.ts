import User from '../src/api/user/user.model';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/app';

const should = chai.should();
const BASE_API = '/api/users';
chai.use(chaiHttp);

describe('User')