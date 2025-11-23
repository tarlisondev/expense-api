import 'dotenv/config';
export default {
    port: process.env.PORT,
    google: {
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY,
        sheetId: process.env.SHEET_ID,
        secret: process.env.SECRET,
    }
};
//# sourceMappingURL=index.js.map