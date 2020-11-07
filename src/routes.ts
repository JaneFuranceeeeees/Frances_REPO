import user from './api/francesuser';
// nama file harus sesuai nama folder utk yang dipake

const routes = (app: any) => {
    app.use ('/api/fusers', user)
}

export default routes;

