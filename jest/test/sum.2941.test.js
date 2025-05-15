const sum = require('../sum');

test('adds 0 + 20 to equal 20', () => {
  expect(sum(0, 20)).toBe(20);
});