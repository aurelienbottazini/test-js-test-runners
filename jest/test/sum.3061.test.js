const sum = require('../sum');

test('adds 92 + 80 to equal 172', () => {
  expect(sum(92, 80)).toBe(172);
});