const sum = require('../sum');

test('adds 70 + 32 to equal 102', () => {
  expect(sum(70, 32)).toBe(102);
});