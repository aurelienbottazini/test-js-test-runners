const sum = require('../sum');

test('adds 10 + 21 to equal 31', () => {
  expect(sum(10, 21)).toBe(31);
});