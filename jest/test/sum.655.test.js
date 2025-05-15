const sum = require('../sum');

test('adds 67 + 73 to equal 140', () => {
  expect(sum(67, 73)).toBe(140);
});