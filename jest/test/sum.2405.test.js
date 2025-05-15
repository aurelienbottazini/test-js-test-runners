const sum = require('../sum');

test('adds 64 + 4 to equal 68', () => {
  expect(sum(64, 4)).toBe(68);
});