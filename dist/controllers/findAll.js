import { findUserByEmail, sheetData } from '../services/google-service.js';
import { comparePassword } from '../utils/bcrypt.js';
import jwt from 'jsonwebtoken';
import config from '../config/index.js';
export const findAll = async (req, res) => {
    try {
        res.status(200).json(await sheetData());
    }
    catch (error) {
        console.log(error);
    }
};
export const LoginUser = async (req, res) => {
    try {
        if (!req.body) {
            res.status(404).json({ data: 'body not fund' });
        }
        const email = req.body.email;
        const password = req.body.password;
        const user = await findUserByEmail(email);
        if (user.length == 0) {
            res.status(400).json({ data: 'User or Password invalid!' });
        }
        const verifyPassword = await comparePassword(password, user[0]?.password);
        if (!verifyPassword) {
            res.status(400).json({ data: 'User or Password invalid!' });
        }
        const token = jwt.sign({ email: user[0]?.email }, config.google.secret, { expiresIn: '30d' });
        res.status(200).json({
            user: user[0], token: token
        });
    }
    catch (error) {
        throw new Error('Error  sign ' + error);
    }
};
//# sourceMappingURL=findAll.js.map