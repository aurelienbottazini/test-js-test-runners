const sum = require('../sum');

test('adds 53 + 93 to equal 146', () => {
  expect(sum(53, 93)).toBe(146);
});