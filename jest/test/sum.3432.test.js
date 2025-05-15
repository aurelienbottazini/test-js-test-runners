const sum = require('../sum');

test('adds 2 + 43 to equal 45', () => {
  expect(sum(2, 43)).toBe(45);
});