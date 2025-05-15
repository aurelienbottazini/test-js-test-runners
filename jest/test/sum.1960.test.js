const sum1960 = require('../sum1960.js');

test('adds 16 + 68 to equal 84 + offset 0.4113961371530678', () => {
  expect(sum1960(16, 68)).toBe(84 + 0.4113961371530678);
});