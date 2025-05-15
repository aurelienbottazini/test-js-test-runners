const sum = require('../sum');

test('adds 0 + 25 to equal 25', () => {
  expect(sum(0, 25)).toBe(25);
});