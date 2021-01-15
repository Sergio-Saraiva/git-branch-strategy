import { Router } from 'express'
const routes = new Router();

routes.get('/', (req, res) => res.json({ msg: 'Hello World' }));

routes.get('/rota-001', (req, res) => {res.json({ result: 1+1})});


export default routes;
