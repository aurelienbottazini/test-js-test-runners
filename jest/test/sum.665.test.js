const sum665 = require('../sum665.js');

test('adds 0 + 10 to equal 10 + offset 0.7458964170558043', () => {
  expect(sum665(0, 10)).toBe(10 + 0.7458964170558043);
});