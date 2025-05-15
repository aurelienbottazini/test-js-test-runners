const sum = require('../sum');

test('adds 29 + 33 to equal 62', () => {
  expect(sum(29, 33)).toBe(62);
});