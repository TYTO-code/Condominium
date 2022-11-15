function validateEmail(email: string): string {
  const error = '';
  if (email.length === 0) {
    return 'Email é obrigatório!';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return 'Email inválido!';
  }
  return error;
}

export { validateEmail };
