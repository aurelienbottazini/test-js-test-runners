const sum = require('../sum');

test('adds 18 + 61 to equal 79', () => {
  expect(sum(18, 61)).toBe(79);
});