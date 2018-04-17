import { greet } from './greet';

describe('greet', () => {
  it('verifica se nome existe na mensagem', () => {
    expect(greet('niander')).toContain('niander');
  });
});
