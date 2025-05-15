const sum = require('../sum');

test('adds 27 + 6 to equal 33', () => {
  expect(sum(27, 6)).toBe(33);
});