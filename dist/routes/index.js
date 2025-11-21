import { Router } from "express";
import { findAll, findDataByYearController, listCategoriesController, listMonthsByExpenseAndInvoiceController, listMonthsController, listYearsController } from "../controllers/findAll.js";
const route = Router();
route.get('/', findAll);
route.get('/list-month-price', findDataByYearController);
route.get('/list-years', listYearsController);
route.get('/list-categories', listCategoriesController);
route.get('/list-months', listMonthsController);
route.get('/list-months-expense-invoice', listMonthsByExpenseAndInvoiceController);
export default route;
//# sourceMappingURL=index.js.map