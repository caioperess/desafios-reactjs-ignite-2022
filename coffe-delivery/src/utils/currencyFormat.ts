export function FormatToCurrency(value: number) {
  return new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(value)
}
