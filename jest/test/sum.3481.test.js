const sum3481 = require('../sum3481.js');

test('adds 40 + 44 to equal 84 + offset 0.8965624507183636', () => {
  expect(sum3481(40, 44)).toBe(84 + 0.8965624507183636);
});