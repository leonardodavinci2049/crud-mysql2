import { Router } from "express";
import routerUser from "./users";

const routerIndex = Router();

routerIndex.use("/users", routerUser);

export default routerIndex;
