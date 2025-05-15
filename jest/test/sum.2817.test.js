const sum = require('../sum');

test('adds 8 + 7 to equal 15', () => {
  expect(sum(8, 7)).toBe(15);
});