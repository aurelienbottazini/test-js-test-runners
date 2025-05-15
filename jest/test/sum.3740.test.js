const sum = require('../sum');

test('adds 74 + 14 to equal 88', () => {
  expect(sum(74, 14)).toBe(88);
});