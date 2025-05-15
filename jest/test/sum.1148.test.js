const sum = require('../sum');

test('adds 71 + 41 to equal 112', () => {
  expect(sum(71, 41)).toBe(112);
});