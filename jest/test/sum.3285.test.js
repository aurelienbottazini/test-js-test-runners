const sum = require('../sum');

test('adds 6 + 73 to equal 79', () => {
  expect(sum(6, 73)).toBe(79);
});