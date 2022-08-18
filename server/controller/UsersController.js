import usersModels from "../models/UsersModel.js"


export const updateUser = async (req, res, next) => {
    try {
      const updatedUser = await usersModels.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
}

export const updateBanStatus = async (req, res, next) => {
    try {
      const updatedUser = await usersModels.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
}

export const notifications = async (req, res, next) => {
  try {
    const updatedUser = await usersModels.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

export const deleteUser = async (req, res, next) => {
    try{
        await usersModels.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (error){
        next(error)
    }
}

export const getUserById = async (req, res, next) => {
    try{
        const user = await usersModels.findById(req.params.id)
        res.status(200).json(user)
    } catch (error){
        next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    try{
        const users = await usersModels.find()
        res.status(200).json(users)
    } catch (error){
        next(error)
    }
}