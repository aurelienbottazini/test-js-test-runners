const sum = require('../sum');

test('adds 27 + 4 to equal 31', () => {
  expect(sum(27, 4)).toBe(31);
});