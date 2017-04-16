import config from './../config';
import * as express from 'express';
import * as crypto from 'crypto';
import { createToken } from './auth.service';
import User from '../api/user/user.model';

let router: express.Router = express.Router();

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email })
    .exec((err, userObj) => {
      if (err) {
        console.error('err', err);
        return res.json({ success: false, data: null, error: err});
      }
      else if(!userObj) {
        return res.json({ success: false, data: null, error: 'Email address not found' });
      }
      let hash = crypto.createHmac('sha1', config.salt).update(req.body.password).digest('hex');
      if(hash == userObj['password']) {
        let currentUser = {
          id: userObj._id,
          name: userObj['name'],
          email: userObj['email'],
        }
        let token = createToken(currentUser);
        currentUser['token'] = token;
        return res.json({success: true, data: currentUser, error: null});
      }
      else {
        return res.json({ success: false, data: null, error: 'Incorrect Password!' });
      }
    });
});
export const authRoutes = router;

