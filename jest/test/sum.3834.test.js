const sum = require('../sum');

test('adds 97 + 25 to equal 122', () => {
  expect(sum(97, 25)).toBe(122);
});