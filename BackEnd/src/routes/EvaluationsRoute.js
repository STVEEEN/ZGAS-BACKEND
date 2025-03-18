import express from "express";
import EvaluationsController from "../controllers/EvaluationsController.js"

const router = express.Router();

router.route("/")
    .get(EvaluationsController.getEvaluations)
    .post(EvaluationsController.postEvaluations)
router.route("/:id")
    .put(EvaluationsController.putEvaluations)
    .delete(EvaluationsController.deleteEvaluations)

export default router;