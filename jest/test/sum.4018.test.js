const sum = require('../sum');

test('adds 67 + 43 to equal 110', () => {
  expect(sum(67, 43)).toBe(110);
});