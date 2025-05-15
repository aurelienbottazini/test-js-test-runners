const sum = require('../sum');

test('adds 19 + 21 to equal 40', () => {
  expect(sum(19, 21)).toBe(40);
});