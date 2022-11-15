function validatePassword(value: string): string {
  const error = '';
  if (value.length === 0) {
    return 'Senha é obrigatória!';
  }

  if (value.length <= 6) {
    return 'Senha precisa ter mais de 6 caractéres!';
  }

  return error;
}

export { validatePassword };
