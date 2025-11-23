import { Router } from "express";
import { createUser, findAll, LoginUser } from "../controllers/findAll.js";
const route = Router();
route.get('/', findAll);
route.post('/user', createUser);
route.post('/login', LoginUser);
export default route;
//# sourceMappingURL=index.js.map