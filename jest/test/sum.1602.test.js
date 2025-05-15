const sum = require('../sum');

test('adds 54 + 66 to equal 120', () => {
  expect(sum(54, 66)).toBe(120);
});