const sum = require('../sum');

test('adds 80 + 96 to equal 176', () => {
  expect(sum(80, 96)).toBe(176);
});