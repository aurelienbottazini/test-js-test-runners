const sum = require('../sum');

test('adds 37 + 73 to equal 110', () => {
  expect(sum(37, 73)).toBe(110);
});