import { getCurrencies } from './getCurrencies';
describe('get currencies', () => {
  it('shoud return supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('EUR');
    expect(result).toContain('AUD');
  });
});
