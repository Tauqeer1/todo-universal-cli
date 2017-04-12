import { User } from './user.model';
import * as crypto from 'crypto';
import { credentials } from './../../credentials';
// Get all
export function index(req, res) {
    res.send('User api is working now');
}
// Get single
export function show(req, res) {

}
// Post/Create
export function create(req, res) {
    User.findOne({email: req.body.email})
        .then(userObj => {
            if(userObj == null) {
                let pwHash = crypto.createHmac('sha1', credentials.salt).update(req.body.password).digest('hex');
                let user = {
                    name: req.body.name,
                    email: req.body.email,
                    password: pwHash,
                };
                User.create(user)
                    .then(user => {
                        res.json({success: true, data: user, error: null});
                    })                
                    .catch(err => {
                        res.json({success: false, data: 'Contact support', error: err});
                    })
            }
            else {
                res.json({success: false, data: 'Email already exists', error: null});
            }
        })
        .catch(err => {
            res.json({success: false, data: 'Contact support', error: err});
        })
}
// Update
export function update(req, res) {

}
// Delete
export function destroy(req, res) {

}
