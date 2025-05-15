const sum = require('../sum');

test('adds 57 + 11 to equal 68', () => {
  expect(sum(57, 11)).toBe(68);
});