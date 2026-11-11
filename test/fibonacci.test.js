import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci', () => {
  it('devuelve 0 cuando n es 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('devuelve 1 cuando n es 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('devuelve 1 cuando n es 2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  it('devuelve 5 cuando n es 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  it('devuelve 8 cuando n es 6', () => {
    expect(fibonacci(6)).toBe(8);
  });

  it('devuelve 55 cuando n es 10', () => {
    expect(fibonacci(10)).toBe(55);
  });

  it('lanza RangeError cuando n es negativo', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
  });

  it('muestra el mensaje indicado para valores negativos', () => {
    expect(() => fibonacci(-1))
      .toThrow('solo números enteros ≥ 0');
  });

  it('rechaza números con decimales', () => {
    expect(() => fibonacci(2.5)).toThrow(RangeError);
  });
});