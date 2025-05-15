const sum = require('../sum');

test('adds 79 + 22 to equal 101', () => {
  expect(sum(79, 22)).toBe(101);
});