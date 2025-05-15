const sum = require('../sum');

test('adds 80 + 92 to equal 172', () => {
  expect(sum(80, 92)).toBe(172);
});