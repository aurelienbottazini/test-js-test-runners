const sum = require('../sum');

test('adds 74 + 70 to equal 144', () => {
  expect(sum(74, 70)).toBe(144);
});