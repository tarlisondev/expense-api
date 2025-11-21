import { GoogleSpreadsheetRow, GoogleSpreadsheetWorksheet } from "google-spreadsheet";
import loadSheet from "../utils/google.js";
import { parsePriceBR } from "../utils/parsePriceBr.js";
import { normalizeMes } from "../utils/normalize.js";

const loadSheetToObject = async (sheetName: string, offset: number, limit?: number): Promise<Partial<Record<string, any>>[]> => {

    const sheet: GoogleSpreadsheetWorksheet = await loadSheet(sheetName);
    const rows: GoogleSpreadsheetRow<Record<string, any>>[] = await sheet.getRows({ offset });
    return rows.map(row => row.toObject());
}

export const sheetData = async (page: number): Promise<Partial<Record<string, any>>[]> => {

    const sheetName: string = 'Despesas';
    const limit: number = 100;
    const offset: number = 4 + (page - 1) * limit;
    return await loadSheetToObject( sheetName, offset, limit);

}

export const findDataByYear = async (year: string): Promise<Partial<Record<string, any>>> => {

    const sheetName: string = 'Despesas';
    const data = await loadSheetToObject(sheetName, 4)

    const list: Partial<Record<string, any>>[] = data.filter((item: Partial<Record<string, any>>) => item.ano === year);

    const mesesValidos: string[] = await listMonths();

    const result: Partial<Record<string, any>> = list.reduce((acc: Partial<Record<string, any>>, item: Partial<Record<string, any>>) => {

        const mes: string = normalizeMes(item.mes) //item.mes;
        const price: number = parsePriceBR(item.valor);

        if (!acc[mes]) acc[mes] = 0;
        acc[mes] += price

        return acc
    }, {} as Record<string, number>);

    const items = Object.keys(result)
        .filter(key => mesesValidos.includes(key))
        .map(key => ({
            name: key,
            expense: result[key]
        }));

    return items;

}

export const listYears = async (): Promise<string[]> => {

    const sheetName: string = 'Despesas';
    const data = await loadSheetToObject(sheetName, 4)
    return [...new Map(data.map(item => [item.ano, item.ano])).values()]

}

export const listCategories = async (): Promise<string[]> => {

    const sheetName: string = 'Despesas';
    const data = await loadSheetToObject(sheetName, 4)
    return [...new Map(data.map(item => [normalizeMes(item.categoria), normalizeMes(item.categoria)])).values()]

}

export const listMonths = async (): Promise<string[]> => {

    const sheetName: string = 'Despesas';
    const data = await loadSheetToObject(sheetName, 4)
    return [...new Map(data.map(item => [normalizeMes(item.mes), normalizeMes(item.mes)])).values()]

}

export const listMonthByExpenseAndInvoice = async () => {
    const sheetName: string = 'report';
    const data = await loadSheetToObject(sheetName, 1);
    console.log(data)
    return data;
}

