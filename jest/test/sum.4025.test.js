const sum = require('../sum');

test('adds 93 + 29 to equal 122', () => {
  expect(sum(93, 29)).toBe(122);
});