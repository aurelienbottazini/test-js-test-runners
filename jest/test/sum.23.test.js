const sum23 = require('../sum23.js');

test('adds 35 + 80 to equal 115 + offset 0.4374454001330035', () => {
  expect(sum23(35, 80)).toBe(115 + 0.4374454001330035);
});