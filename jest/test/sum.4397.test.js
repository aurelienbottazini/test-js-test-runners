const sum = require('../sum');

test('adds 98 + 79 to equal 177', () => {
  expect(sum(98, 79)).toBe(177);
});