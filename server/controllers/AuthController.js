const bcrypt = require('bcryptjs');
const { generateToken } = require('../helpers/jwt');
const { User } = require('../models');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

class Auth {
    static async register(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.create({ email, password });
            res.status(201).json({ id: user.id, email: user.email });
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });

            if (!email || !password) {
                throw { name: 'CustomErrorRequired' };
            }

            if (user && bcrypt.compareSync(password, user.password)) {
                const access_token = generateToken({ id: user.id, email: user.email });
                return res.status(200).json({ access_token });
            }
            else {
                throw { name: 'CustomErrorInvalidCredentials' };
            }

        } catch (error) {
            next(error);
        }
    }

    static async googleLogin(req, res, next) {
        try {
            console.log(req.headers);
            const { google_token } = req.headers;
            const ticket = await client.verifyIdToken({
                idToken: google_token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();
            const [user, created] = await User.findOrCreate({
                where: { email: payload.email },
                defaults: {
                    email: payload.email,
                    password: `${Math.random() * 1000}`
                }
            });
            const access_token = generateToken({ id: user.id, email: user.email });
            return res.status(200).json({ access_token });
        } catch (error) {
            next(error);

        }
    }
}

module.exports = Auth;