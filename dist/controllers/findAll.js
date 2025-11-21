import { sheetData, findDataByYear, listYears, listCategories, listMonths, listMonthByExpenseAndInvoice } from '../services/google-service.js';
export const findAll = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        res.status(200).json({ data: await sheetData(page) });
    }
    catch (error) {
        console.log(error);
    }
};
export const findDataByYearController = async (req, res) => {
    try {
        const year = req.query.y;
        res.status(200).json({ data: await findDataByYear(year) });
    }
    catch (error) {
        console.error(error);
    }
};
export const listYearsController = async (req, res) => {
    try {
        res.status(200).json({ data: await listYears() });
    }
    catch (error) {
        console.error(error);
    }
};
export const listCategoriesController = async (req, res) => {
    try {
        res.status(200).json({ data: await listCategories() });
    }
    catch (error) {
        console.error(error);
    }
};
export const listMonthsController = async (req, res) => {
    try {
        res.status(200).json({ data: await listMonths() });
    }
    catch (error) {
        console.error(error);
    }
};
export const listMonthsByExpenseAndInvoiceController = async (req, res) => {
    try {
        res.status(200).json({ data: await listMonthByExpenseAndInvoice() });
    }
    catch (error) {
        console.error(error);
    }
};
//# sourceMappingURL=findAll.js.map