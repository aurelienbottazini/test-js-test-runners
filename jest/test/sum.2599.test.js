const sum = require('../sum');

test('adds 71 + 3 to equal 74', () => {
  expect(sum(71, 3)).toBe(74);
});