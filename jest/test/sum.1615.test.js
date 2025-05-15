const sum = require('../sum');

test('adds 16 + 17 to equal 33', () => {
  expect(sum(16, 17)).toBe(33);
});