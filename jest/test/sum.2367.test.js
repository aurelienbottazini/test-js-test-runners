const sum = require('../sum');

test('adds 19 + 7 to equal 26', () => {
  expect(sum(19, 7)).toBe(26);
});