const sum = require('../sum');

test('adds 51 + 28 to equal 79', () => {
  expect(sum(51, 28)).toBe(79);
});