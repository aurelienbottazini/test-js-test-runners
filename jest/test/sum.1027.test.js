const sum = require('../sum');

test('adds 62 + 84 to equal 146', () => {
  expect(sum(62, 84)).toBe(146);
});