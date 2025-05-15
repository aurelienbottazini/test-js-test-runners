const sum = require('../sum');

test('adds 29 + 93 to equal 122', () => {
  expect(sum(29, 93)).toBe(122);
});