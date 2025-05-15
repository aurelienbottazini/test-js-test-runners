const sum = require('../sum');

test('adds 96 + 28 to equal 124', () => {
  expect(sum(96, 28)).toBe(124);
});