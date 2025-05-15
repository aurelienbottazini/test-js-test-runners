const sum = require('../sum');

test('adds 15 + 47 to equal 62', () => {
  expect(sum(15, 47)).toBe(62);
});