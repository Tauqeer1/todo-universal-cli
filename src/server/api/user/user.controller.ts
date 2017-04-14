import User from './user.model';
import * as crypto from 'crypto';
import config from '../../config';

// Get all
export function index(req, res) {
    res.send('User api is working now');
}
// Get single
export function show(req, res) {

}
// Post/Create
export function create(req, res) {
    User.findOne({ email: req.body.email })
        .exec((err, userObj) => {
            if (err) {
                return res.json({ success: false, data: 'Contact support', error: err });
            }
            else if (userObj == null) {
                let pwHash = crypto.createHmac('sha1', config.salt).update(req.body.password).digest('hex');
                let user = {
                    name: req.body.name,
                    email: req.body.email,
                    password: pwHash
                };
                User.create(user)
                    .then(user => {
                        return res.json({ success: true, data: user, error: null });
                    })
                    .catch(err => {
                        return res.json({ success: false, data: 'Contact support', error: err });
                    });
            }
            else {
                return res.json({ success: false, data: 'Email already exists', error: null });
            }
        });
}
// Update
export function update(req, res) {

}
// Delete
export function destroy(req, res) {

}
