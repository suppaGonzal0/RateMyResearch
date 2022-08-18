import requestsModel from "../models/RequestsModel.js"
import papersModel from "../models/PapersModel.js"

export const sendRequest = async (req, res, next) => {
    const newRequest = new requestsModel(req.body)

    try{
        await newRequest.save()
        res.status(200).json("Paper request sent was successful")
    } catch(error){
        next(error)
    }
}

export const deleteRequest = async (req, res, next) => {
    try{
        await requestsModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Request has been deleted")
    } catch (error){
        next(error)
    }
}

export const approveRequest = async (req, res, next) => {
    try{
        const paperReq = await requestsModel.findById(req.params.id)
        const {username, email, _id, ...paperInfo} = paperReq._doc
        const newPaper = new papersModel({...paperInfo})
        await newPaper.save()
        await requestsModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Request has been approved")
    } catch (error){
        next(error)
    }
}

export const getAllRequests = async (req, res, next) => {
    try{
        const requests = await requestsModel.find()
        res.status(200).json(requests)
    } catch (error){
        next(error)
    }
}