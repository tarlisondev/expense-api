import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import config from '../config/index.js';

const serviceAccountAuth = new JWT({
    email: config.google.email as string,
    key: config.google.key as string,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const worksheet = new GoogleSpreadsheet(config.google.sheetId as string, serviceAccountAuth);

const loadSheet = async (sheetName: string): Promise<GoogleSpreadsheetWorksheet> => {
    await worksheet.loadInfo();
    const sheet = worksheet.sheetsByTitle[sheetName];

    if (!sheet) {
        throw new Error(`sheet ${worksheet.title} not found`);
    }

    return sheet;
}

export default loadSheet;
