
export function parsePriceBR(valor: string): number {
    return parseFloat(
      valor
        .replace(/\./g, '')
        .replace(',', '.')
    );
  }