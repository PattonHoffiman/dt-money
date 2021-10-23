const formatDate = (date: Date) => new Intl.DateTimeFormat('pt-BR').format(new Date(date));

export default formatDate;