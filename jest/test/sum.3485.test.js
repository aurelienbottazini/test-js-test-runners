const sum = require('../sum');

test('adds 77 + 95 to equal 172', () => {
  expect(sum(77, 95)).toBe(172);
});