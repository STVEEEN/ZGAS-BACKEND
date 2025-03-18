import express from "express";
import productsRoutes from "./src/routes/productsRoute.js"
import employeesRoutes from "./src/routes/employeesRoute.js"  
import branchesRoutes from "./src/routes/BranchesRoute.js" 
import clientsRoutes from "./src/routes/ClientsRoute.js"
import reviewsRoutes from "./src/routes/ReviewsRoute.js" 
import EvaluationsRoutes from  "./src/routes/EvaluationsRoute.js"  

const app = express();

app.use(express.json());

app.use("/api/products", productsRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/branches", branchesRoutes)
app.use("/api/clients", clientsRoutes)
app.use("/api/reviews", reviewsRoutes)
app.use("/api/Evaluations", EvaluationsRoutes)

export default app;