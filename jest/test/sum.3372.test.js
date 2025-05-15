const sum3372 = require('../sum3372.js');

test('adds 36 + 29 to equal 65 + 0.6065730516838594', () => {
  expect(sum3372(36, 29)).toBe(65 + 0.6065730516838594);
});