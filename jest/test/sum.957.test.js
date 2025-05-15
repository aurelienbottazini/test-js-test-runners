const sum957 = require('../sum957.js');

test('adds 32 + 28 to equal 60 + offset 0.4926856027861142', () => {
  expect(sum957(32, 28)).toBe(60 + 0.4926856027861142);
});