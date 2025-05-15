const sum = require('../sum');

test('adds 91 + 74 to equal 165', () => {
  expect(sum(91, 74)).toBe(165);
});