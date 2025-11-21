export function parsePriceBR(valor) {
    return parseFloat(valor
        .replace(/\./g, '')
        .replace(',', '.'));
}
//# sourceMappingURL=parsePriceBr.js.map