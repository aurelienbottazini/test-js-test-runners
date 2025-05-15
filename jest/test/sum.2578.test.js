const sum = require('../sum');

test('adds 29 + 59 to equal 88', () => {
  expect(sum(29, 59)).toBe(88);
});