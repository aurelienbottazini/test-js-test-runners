const sum = require('../sum');

test('adds 74 + 66 to equal 140', () => {
  expect(sum(74, 66)).toBe(140);
});