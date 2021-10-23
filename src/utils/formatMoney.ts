const formatMoney = (price: number) => new Intl.NumberFormat('pt-BR', {
  minimumIntegerDigits: 2,
  style: 'currency',
  currency: 'BRL'
}).format(price);

export default formatMoney;