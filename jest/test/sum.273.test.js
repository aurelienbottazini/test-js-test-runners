const sum = require('../sum');

test('adds 62 + 78 to equal 140', () => {
  expect(sum(62, 78)).toBe(140);
});