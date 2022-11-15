function validateName(value: string): string {
  let error = '';
  if (value.length === 0) {
    error = 'Nome é obrigatório!';
  }
  return error;
}

export { validateName };
