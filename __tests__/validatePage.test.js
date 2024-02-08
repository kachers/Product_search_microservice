const validatePage = require('../src/api/helpers/validatePage');

describe('validatePage function', () => {
    it('should return true for a valid page number', () => {
        expect(validatePage('3')).toBe(true);
    });

    it('should return false for an invalid page number (less than 1)', () => {
        expect(validatePage('0')).toBe(false);
    });
    
    it('should return false for an invalid page number (not a string)', () => {
        expect(validatePage(2)).toBe(false);
    });
    
    it('should return false for an invalid page number (not a number)', () => {
        expect(validatePage('abc')).toBe(false);
    });
});