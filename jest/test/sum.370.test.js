const sum = require('../sum');

test('adds 33 + 79 to equal 112', () => {
  expect(sum(33, 79)).toBe(112);
});