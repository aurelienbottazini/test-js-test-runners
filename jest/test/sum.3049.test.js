const sum = require('../sum');

test('adds 68 + 20 to equal 88', () => {
  expect(sum(68, 20)).toBe(88);
});