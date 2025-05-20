import jwt from 'jsonwebtoken';

const generateJWTWithCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_private, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
}

export default generateJWTWithCookie;