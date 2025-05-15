const sum = require('../sum');

test('adds 48 + 57 to equal 105', () => {
  expect(sum(48, 57)).toBe(105);
});