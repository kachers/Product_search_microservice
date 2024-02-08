const validateQuery = require('../src/api/helpers/validateQuery');

describe('validateQuery function', () => {
  it('should return true for a valid non-empty string', () => {
    expect(validateQuery('search')).toBe(true);
  });

  it('should return false for an invalid empty string', () => {
    expect(validateQuery('')).toBe(false);
  });

  it('should return false for an invalid input (not a string)', () => {
    expect(validateQuery(42)).toBe(false);
  });

  it('should return false for an invalid input (undefined)', () => {
    expect(validateQuery(undefined)).toBe(false);
  });
});