const sum = require('../sum');

test('adds 80 + 95 to equal 175', () => {
  expect(sum(80, 95)).toBe(175);
});