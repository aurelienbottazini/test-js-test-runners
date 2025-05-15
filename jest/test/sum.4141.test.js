const sum = require('../sum');

test('adds 79 + 11 to equal 90', () => {
  expect(sum(79, 11)).toBe(90);
});