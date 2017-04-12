import * as jwt from 'jsonwebtoken';
import { credentials } from './../credentials';


export function createToken(user: Object) {
    console.log('user Obj', user);
    let token = jwt.sign(user, credentials.salt, { expiresIn: "90 days" }); //expires in 90 days
    return token;
}

export function verifyToken(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, credentials.salt, (err, verifiedJwt) => {
      if (err) {
        reject(err);
      } else {
        resolve(verifiedJwt);
      }
    });
  });
}