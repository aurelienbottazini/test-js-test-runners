const sum = require('../sum');

test('adds 55 + 33 to equal 88', () => {
  expect(sum(55, 33)).toBe(88);
});