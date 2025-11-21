import { Request, Response } from 'express';
import { sheetData, findDataByYear, listYears, listCategories, listMonths, listMonthByExpenseAndInvoice } from '../services/google-service.js'

export const findAll = async (req: Request, res: Response): Promise<void> => {

    try {
        const page: number = Number(req.query.page) || 1
        res.status(200).json({ data: await sheetData(page) });
    } catch (error) {
        console.log(error);
    }

}

export const findDataByYearController = async (req: Request, res: Response): Promise<void> => {
    try {
        const year: string = req.query.y as string
        res.status(200).json({ data: await findDataByYear(year) })
    } catch (error) {
        console.error(error)
    }

}

export const listYearsController = async (req: Request, res: Response): Promise<void> => {

    try {
        res.status(200).json({ data: await listYears() })
    } catch (error) {
        console.error(error)
    }

}

export const listCategoriesController = async (req: Request, res: Response): Promise<void> => {

    try {
        res.status(200).json({ data: await listCategories() })
    } catch (error) {
        console.error(error)
    }

}

export const listMonthsController = async (req: Request, res: Response): Promise<void> => {

    try {
        res.status(200).json({ data: await listMonths() })
    } catch (error) {
        console.error(error)
    }

}

export const listMonthsByExpenseAndInvoiceController = async (req: Request, res: Response): Promise<void> => {

    try {
        res.status(200).json({ data: await listMonthByExpenseAndInvoice() })
    } catch (error) {
        console.error(error)
    }

}
