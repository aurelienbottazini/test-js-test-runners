const sum = require('../sum');

test('adds 41 + 27 to equal 68', () => {
  expect(sum(41, 27)).toBe(68);
});