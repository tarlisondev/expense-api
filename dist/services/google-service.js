import loadSheet from "../utils/google.js";
// Busca os dados na planilha e converte para formato de array de objeto
const sheetToObject = async (sheetname, offset) => {
    // Carrega os dado da planilha buscando pelo titulo da planilha
    const sheet = await loadSheet(sheetname);
    // retorna os dados de cada linha da planilha
    const rows = await sheet.getRows({ offset });
    // converte os dados para formato array de objetos
    return await rows.map(row => row.toObject());
};
export const sheetData = async () => await sheetToObject('Despesas', 4);
export const findUserByEmail = async (email) => {
    const data = await sheetToObject('user', 0);
    return data.filter(item => item.email === email);
};
//# sourceMappingURL=google-service.js.map