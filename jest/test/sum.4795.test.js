const sum = require('../sum');

test('adds 93 + 32 to equal 125', () => {
  expect(sum(93, 32)).toBe(125);
});