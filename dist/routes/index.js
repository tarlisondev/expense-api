import { Router } from "express";
import { findAll, LoginUser } from "../controllers/findAll.js";
const route = Router();
route.get('/', findAll);
route.post('/login', LoginUser);
export default route;
//# sourceMappingURL=index.js.map