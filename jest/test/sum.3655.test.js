const sum = require('../sum');

test('adds 62 + 21 to equal 83', () => {
  expect(sum(62, 21)).toBe(83);
});