const sum = require('../sum');

test('adds 78 + 32 to equal 110', () => {
  expect(sum(78, 32)).toBe(110);
});