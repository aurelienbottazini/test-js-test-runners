const sum1665 = require('../sum1665.js');

test('adds 76 + 26 to equal 102 + offset 0.12085218404321696', () => {
  expect(sum1665(76, 26)).toBe(102 + 0.12085218404321696);
});