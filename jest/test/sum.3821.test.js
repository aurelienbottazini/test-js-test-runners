const sum = require('../sum');

test('adds 93 + 68 to equal 161', () => {
  expect(sum(93, 68)).toBe(161);
});