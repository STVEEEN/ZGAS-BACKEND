import {Schema, model} from "mongoose";

const EvaluationsSchema = new Schema({
    comment : {
        type : String,
        required : true,
        maxLength : 50
    },
    grade : {
        type : Number,
        required : true,
        max : 10,
        min : 0

    },
    role : {
        type : String,
        required : true,
        maxLength : 50
    },
    idEmployees : {
        type : Schema.Types.ObjectId,
        ref : "employees",
        required : true
    }
},{timestamps : true, strict : false})

export default model("Evaluations", EvaluationsSchema)
