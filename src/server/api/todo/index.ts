import * as express from 'express';
import * as todoController from './todo.controller';
let router: express.Router = express.Router();


router.get('/:id', todoController.index);
router.get('/:id', todoController.show);
router.post('/', todoController.create);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.destroy);

export const todoRoutes = router;