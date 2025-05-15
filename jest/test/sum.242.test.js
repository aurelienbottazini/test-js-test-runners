const sum = require('../sum');

test('adds 66 + 53 to equal 119', () => {
  expect(sum(66, 53)).toBe(119);
});