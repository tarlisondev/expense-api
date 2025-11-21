import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import config from '../config/index.js';
const serviceAccountAuth = new JWT({
    email: config.google.email,
    key: config.google.key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const worksheet = new GoogleSpreadsheet(config.google.sheetId, serviceAccountAuth);
const loadSheet = async (sheetName) => {
    await worksheet.loadInfo();
    const sheet = worksheet.sheetsByTitle[sheetName];
    if (!sheet) {
        throw new Error(`sheet ${worksheet.title} not found`);
    }
    return sheet;
};
export default loadSheet;
//# sourceMappingURL=google.js.map