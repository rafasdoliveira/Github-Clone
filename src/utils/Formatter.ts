export const DateFormatter = (dataOriginal: string): string | null => {
  if (!dataOriginal) return null;

  const data = new Date(dataOriginal);

  const dataFormatada = data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return dataFormatada;
};
