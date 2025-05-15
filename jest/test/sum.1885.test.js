const sum = require('../sum');

test('adds 17 + 4 to equal 21', () => {
  expect(sum(17, 4)).toBe(21);
});