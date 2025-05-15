const sum = require('../sum');

test('adds 71 + 73 to equal 144', () => {
  expect(sum(71, 73)).toBe(144);
});