import * as express from 'express';
import * as userController from './user.controller';


let router: express.Router = express.Router();

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);

export const userRoutes = router;