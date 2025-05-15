const sum = require('../sum');

test('adds 25 + 43 to equal 68', () => {
  expect(sum(25, 43)).toBe(68);
});