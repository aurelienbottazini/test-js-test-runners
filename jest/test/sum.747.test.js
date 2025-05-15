const sum = require('../sum');

test('adds 19 + 26 to equal 45', () => {
  expect(sum(19, 26)).toBe(45);
});