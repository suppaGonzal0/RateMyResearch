import papersModel from "../models/PapersModel.js"

export const addPaper = async (req, res, next) => {
    const newPaper = new papersModel(req.body)

    try{
        await newPaper.save()
        res.status(200).json("Paper add request successful")
    } catch(error){
        next(error)
    }
}

export const updatePaper = async (req, res, next) => {
    try {
      const updatedPaper = await papersModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedPaper);
    } catch (err) {
      next(err);
    }
}

export const deletePaper = async (req, res, next) => {
    try{
        await papersModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Paper has been deleted")
    } catch (error){
        next(error)
    }
}

export const getPaperById = async (req, res, next) => {
    try{
        const paper = await papersModel.findById(req.params.id)
        res.status(200).json(paper)
    } catch (error){
        next(error)
    }
}

export const getAllPapers = async (req, res, next) => {
    try{
        const papers = await papersModel.find()
        res.status(200).json(papers)
    } catch (error){
        next(error)
    }
}