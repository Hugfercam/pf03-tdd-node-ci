export function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError('solo números enteros ≥ 0');
  }

  if (n <= 1) {
    return n;
  }

  let anterior = 0;
  let actual = 1;

  for (let i = 2; i <= n; i++) {
    const siguiente = anterior + actual;
    anterior = actual;
    actual = siguiente;
  }

  return actual;
}