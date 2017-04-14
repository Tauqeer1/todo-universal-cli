import config from './../config';
import * as express from 'express';
import * as crypto from 'crypto';
import { createToken } from './auth.service';
import User  from '../api/user/user.model';

let router: express.Router = express.Router();

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(userObj => {
      let hash = crypto.createHmac('sha1', config.salt).update(req.body.password).digest('hex');
      if (hash == userObj['password']) {
        delete userObj['password'];
        let token = createToken(userObj);
        /*console.log('token', token);
        userObj['token'] = token;
        console.log('user', userObj);*/
        res.json({ success: true, data: token, error: null });
      }
      else {
        res.json({ success: false, data: null, error: 'Wrong Password' });
      }
    })
    .catch(err => {
      res.json({ success: false, data: null, error: 'Email adderess not found' });
    });
});
export const authRoutes = router;

