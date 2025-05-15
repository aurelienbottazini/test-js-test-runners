const sum3932 = require('../sum3932.js');

test('adds 70 + 16 to equal 86 + 0.9271675875113002', () => {
  expect(sum3932(70, 16)).toBe(86 + 0.9271675875113002);
});