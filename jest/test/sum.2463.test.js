const sum = require('../sum');

test('adds 41 + 73 to equal 114', () => {
  expect(sum(41, 73)).toBe(114);
});