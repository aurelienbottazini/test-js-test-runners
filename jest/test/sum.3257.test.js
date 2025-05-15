const sum = require('../sum');

test('adds 93 + 61 to equal 154', () => {
  expect(sum(93, 61)).toBe(154);
});