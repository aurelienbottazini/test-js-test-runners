const sum = require('../sum');

test('adds 19 + 49 to equal 68', () => {
  expect(sum(19, 49)).toBe(68);
});