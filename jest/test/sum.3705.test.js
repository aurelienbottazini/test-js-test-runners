const sum = require('../sum');

test('adds 93 + 34 to equal 127', () => {
  expect(sum(93, 34)).toBe(127);
});