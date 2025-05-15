const sum = require('../sum');

test('adds 34 + 57 to equal 91', () => {
  expect(sum(34, 57)).toBe(91);
});