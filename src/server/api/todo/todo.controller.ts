import Todo from './todo.model';
import * as crypto from 'crypto';
// Get all
export function index(req, res) {
    Todo.find().sort('-date')
        .exec((err, todos) => {
            if (err) {
                return res.json({ success: false, data: null, error: err });
            }
            else {
                return res.json({ success: true, data: todos, error: null });
            }
        });
}
// Get single
export function show(req, res) {

}
// Post/Create
export function create(req, res) {
    console.log('req.body', req.body);
    Todo.create(req.body)
        .then(todo => {
            return res.json({ success: true, data: todo, error: null });
        })
        .catch(err => {
            return res.json({ success: false, data: 'Contact support', error: err });
        });
}
// Update
export function update(req, res) {

}
// Delete
export function destroy(req, res) {
    console.log('req.params.id', req.params.id);
    Todo.remove({ _id: req.params.id })
        .exec((err, todo) => {
            if (err) {
                return res.json({ success: false, data: 'Contact support', err: err });
            }
            return res.json({ success: true, data: todo, err: null });
        })
}
