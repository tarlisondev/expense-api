export function normalizeMes(mes) {
    return mes
        .trim()
        .toLowerCase()
        .normalize("NFD") // remove acentos
        .replace(/[\u0300-\u036f]/g, '');
}
//# sourceMappingURL=normalize.js.map