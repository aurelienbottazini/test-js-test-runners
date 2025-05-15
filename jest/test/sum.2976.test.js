const sum = require('../sum');

test('adds 0 + 15 to equal 15', () => {
  expect(sum(0, 15)).toBe(15);
});