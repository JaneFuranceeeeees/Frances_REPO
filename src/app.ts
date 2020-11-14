import config from './environment';
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import http from 'http';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();

app.use(cors({origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
routes(app);

//Connect to Database
mongoose.connect(config.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.get('/index', (req,res) => {
    console.log("req: ", req);
    res.send("method get jalan !");
    return res.status(200).json({message: "success!"})
})

app.post('/create', (req,res) => {
    console.log("req: ", req);
    res.send("method get jalan !");
    return res.status(200).json({message: "success!"})
})


app.delete('/remove', (req,res) => {
    console.log("req: ", req);
    res.send("method get jalan !");
    return res.status(200).json({message: "success!"})
})

app.put('/update', (req,res) => {
    console.log("req: ", req);
    res.send("method get jalan !");
    return res.status(200).json({message: "success!"})
})

const server = http.createServer(app);
//server initilization
function startServer(){
    server.listen(config.port, parseInt(config.host), function(){
        console.log('Express server listening on %d, in %s mode %s', config.port, config.host, config.env);
    })
}

setImmediate(startServer);
