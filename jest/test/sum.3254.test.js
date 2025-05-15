const sum = require('../sum');

test('adds 11 + 39 to equal 50', () => {
  expect(sum(11, 39)).toBe(50);
});