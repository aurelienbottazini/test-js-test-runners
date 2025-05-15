const sum = require('../sum');

test('adds 87 + 57 to equal 144', () => {
  expect(sum(87, 57)).toBe(144);
});