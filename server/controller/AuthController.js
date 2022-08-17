import UsersModel from "../models/UsersModel.js"
import bcrypt  from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new UsersModel({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })

        await newUser.save()
        res.status(201).send("New user has been registered")
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try{
        const user = await UsersModel.findOne({email:req.body.email})
        if(!user) return next({status: 404, message: "User not found"})

        const passwordCheck = await bcrypt.compare(
            req.body.password, user.password
        )
        if(!passwordCheck) return next({status: 400, message: "Wrong password"})

        const token = jwt.sign({id: user._id, isAdmin:user.isAdmin, isBanned: user.isBanned}, "secretKey")

        const {password, isAdmin, isBanned, ...otherInfo} = user._doc
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .send({...otherInfo})
    } catch (error) {
        next(error)
    }
}

export const logout = async (req, res, next) => {
    res.cookie("access_token", "", {maxAge: 1})
    next()
}