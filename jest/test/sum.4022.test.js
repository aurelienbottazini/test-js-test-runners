const sum = require('../sum');

test('adds 86 + 86 to equal 172', () => {
  expect(sum(86, 86)).toBe(172);
});