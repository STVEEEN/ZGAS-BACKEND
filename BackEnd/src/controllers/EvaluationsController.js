const EvaluationsController = {};
 import EvaluationsModel from "../models/Evaluations.js";

EvaluationsController.getEvaluations = async (req, res) => {
    try {
        const Evaluations = await EvaluationsModel.find().populate("idEmployees");
        res.json(Evaluations);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

EvaluationsController.postEvaluations = async (req, res) => {
    try {
        const { comment, grade, role, idEmployees } = req.body;
        const newEvaluations = new EvaluationsModel({ comment, grade, role, idEmployees });
        await newEvaluations.save();
        res.status(200).json({ message: "OK" });
    } catch (error) {
        res.status(400).json({ message: "Bad Request", error });
    }
};

EvaluationsController.putEvaluations = async (req, res) => {
    try {
        const { comment, grade, role, idEmployees } = req.body;
        const updatedEvaluations = await EvaluationsModel.findByIdAndUpdate(
            req.params.id,
            { comment, grade, role, idEmployees },
            { new: true, runValidators: true }
        );

        if (!updatedEvaluations) {
            return res.status(404).json({ message: "Not Found" });
        }
        res.json({ message: "OK", updatedEvaluations });
    } catch (error) {
        res.status(400).json({ message: "Bad Request", error });
    }
};

EvaluationsController.deleteEvaluations = async (req, res) => {
    try {
        const deletedEvaluations = await EvaluationsModel.findByIdAndDelete(req.params.id);
        if (!deletedEvaluations) {
            return res.status(404).json({ message: "Not Found" });
        }
        res.json({ message: "OK" });
    } catch (error) {
        res.status(500).json({ message: "Bad Request", error });
    }
};

export default EvaluationsController;