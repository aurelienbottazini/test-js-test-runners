const sum = require('../sum');

test('adds 2 + 57 to equal 59', () => {
  expect(sum(2, 57)).toBe(59);
});