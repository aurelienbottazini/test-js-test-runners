const sum = require('../sum');

test('adds 81 + 20 to equal 101', () => {
  expect(sum(81, 20)).toBe(101);
});