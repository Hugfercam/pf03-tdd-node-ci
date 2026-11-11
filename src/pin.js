export function esPinValido(pin) {
  if (typeof pin !== 'string') {
    return false;
  }

  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < '0' || pin[i] > '9') {
      return false;
    }
  }

  let todosIguales = true;

  for (let i = 1; i < pin.length; i++) {
    if (pin[i] !== pin[0]) {
      todosIguales = false;
      break;
    }
  }

  if (todosIguales) {
    return false;
  }

  return true;
}