import loadSheet from "../utils/google.js";
import { parsePriceBR } from "../utils/parsePriceBr.js";
import { normalizeMes } from "../utils/normalize.js";
const loadSheetToObject = async (sheetName, offset, limit) => {
    const sheet = await loadSheet(sheetName);
    const rows = await sheet.getRows({ offset });
    return rows.map(row => row.toObject());
};
export const sheetData = async (page) => {
    const sheetName = 'Despesas';
    const limit = 100;
    const offset = 4 + (page - 1) * limit;
    return await loadSheetToObject(sheetName, offset, limit);
};
export const findDataByYear = async (year) => {
    const sheetName = 'Despesas';
    const data = await loadSheetToObject(sheetName, 4);
    const list = data.filter((item) => item.ano === year);
    const mesesValidos = await listMonths();
    const result = list.reduce((acc, item) => {
        const mes = normalizeMes(item.mes); //item.mes;
        const price = parsePriceBR(item.valor);
        if (!acc[mes])
            acc[mes] = 0;
        acc[mes] += price;
        return acc;
    }, {});
    const items = Object.keys(result)
        .filter(key => mesesValidos.includes(key))
        .map(key => ({
        name: key,
        expense: result[key]
    }));
    return items;
};
export const listYears = async () => {
    const sheetName = 'Despesas';
    const data = await loadSheetToObject(sheetName, 4);
    return [...new Map(data.map(item => [item.ano, item.ano])).values()];
};
export const listCategories = async () => {
    const sheetName = 'Despesas';
    const data = await loadSheetToObject(sheetName, 4);
    return [...new Map(data.map(item => [normalizeMes(item.categoria), normalizeMes(item.categoria)])).values()];
};
export const listMonths = async () => {
    const sheetName = 'Despesas';
    const data = await loadSheetToObject(sheetName, 4);
    return [...new Map(data.map(item => [normalizeMes(item.mes), normalizeMes(item.mes)])).values()];
};
export const listMonthByExpenseAndInvoice = async () => {
    const sheetName = 'report';
    const data = await loadSheetToObject(sheetName, 1);
    console.log(data);
    return data;
};
//# sourceMappingURL=google-service.js.map