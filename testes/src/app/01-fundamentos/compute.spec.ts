import { compute } from './compute';

describe('compute', () => {

  it('verifica se o retorno é 0 quando número for negativo', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('verifica se o retorno é 2 quando número for 1', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });

  it('verifica se o retorno é 3 quando número for 2', () => {
    const result = compute(2);
    expect(result).toBe(3);
  });

});
