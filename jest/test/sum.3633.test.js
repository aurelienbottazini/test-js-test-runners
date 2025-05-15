const sum = require('../sum');

test('adds 8 + 93 to equal 101', () => {
  expect(sum(8, 93)).toBe(101);
});