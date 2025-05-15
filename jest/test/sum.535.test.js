const sum = require('../sum');

test('adds 5 + 21 to equal 26', () => {
  expect(sum(5, 21)).toBe(26);
});