const sum = require('../sum');

test('adds 35 + 32 to equal 67', () => {
  expect(sum(35, 32)).toBe(67);
});