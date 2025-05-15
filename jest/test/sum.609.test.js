const sum = require('../sum');

test('adds 35 + 53 to equal 88', () => {
  expect(sum(35, 53)).toBe(88);
});