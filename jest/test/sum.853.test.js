const sum = require('../sum');

test('adds 81 + 31 to equal 112', () => {
  expect(sum(81, 31)).toBe(112);
});