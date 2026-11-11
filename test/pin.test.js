import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
  it('acepta un PIN de 4 dígitos distintos', () => {
    expect(esPinValido('1234')).toBe(true);
  });

  it('acepta un PIN de 6 dígitos', () => {
    expect(esPinValido('123456')).toBe(true);
  });

  it('acepta un PIN con cero inicial', () => {
    expect(esPinValido('0123')).toBe(true);
  });

  it('acepta dígitos repetidos si no son todos iguales', () => {
    expect(esPinValido('1122')).toBe(true);
  });

  it('rechaza null', () => {
    expect(esPinValido(null)).toBe(false);
  });

  it('rechaza undefined', () => {
    expect(esPinValido(undefined)).toBe(false);
  });

  it('rechaza una cadena vacía', () => {
    expect(esPinValido('')).toBe(false);
  });

  it('rechaza un PIN de 3 dígitos', () => {
    expect(esPinValido('123')).toBe(false);
  });

  it('rechaza un PIN de 5 dígitos', () => {
    expect(esPinValido('12345')).toBe(false);
  });

  it('rechaza un PIN de 7 dígitos', () => {
    expect(esPinValido('1234567')).toBe(false);
  });

  it('rechaza letras', () => {
    expect(esPinValido('12a4')).toBe(false);
  });

  it('rechaza espacios', () => {
    expect(esPinValido('12 4')).toBe(false);
  });

  it('rechaza símbolos', () => {
    expect(esPinValido('12-4')).toBe(false);
  });

  it('rechaza 4 dígitos iguales', () => {
    expect(esPinValido('1111')).toBe(false);
  });

  it('rechaza 6 dígitos iguales', () => {
    expect(esPinValido('888888')).toBe(false);
  });

  it('rechaza un valor de tipo number', () => {
    expect(esPinValido(1234)).toBe(false);
  });
});