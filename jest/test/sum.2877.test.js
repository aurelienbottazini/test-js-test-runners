const sum = require('../sum');

test('adds 95 + 77 to equal 172', () => {
  expect(sum(95, 77)).toBe(172);
});