const sum = require('../sum');

test('adds 97 + 78 to equal 175', () => {
  expect(sum(97, 78)).toBe(175);
});