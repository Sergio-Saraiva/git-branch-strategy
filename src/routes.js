import { Router } from 'express'
const routes = new Router();

routes.get('/', (req, res) => res.json({ msg: 'Hello World' }));

routes.get('/rota-001/:num', (req, res) => {
    const {num} = req.params    
    res.json({ result: Number(num)+1})
});

routes.get('/rota-003/:num', (req, res) => {
    const {num} = req.params    
    res.json({ result: Number(num*num)+1})
});

export default routes;
