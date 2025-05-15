const sum = require('../sum');

test('adds 38 + 57 to equal 95', () => {
  expect(sum(38, 57)).toBe(95);
});