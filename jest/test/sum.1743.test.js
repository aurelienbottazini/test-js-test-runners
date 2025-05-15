const sum = require('../sum');

test('adds 66 + 22 to equal 88', () => {
  expect(sum(66, 22)).toBe(88);
});