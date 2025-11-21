

export function normalizeMes(mes: string): string {
  return mes
    .trim()
    .toLowerCase()
    .normalize("NFD")      // remove acentos
    .replace(/[\u0300-\u036f]/g, '');
}
