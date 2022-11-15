function validateFunction(value: string): string {
  let error = '';
  if (value.length === 0) {
    error = 'Função é obrigatório!';
  }
  return error;
}

export { validateFunction };
