const sum3985 = require('../sum3985.js');

test('adds 35 + 37 to equal 72 + 0.6309556492738086', () => {
  expect(sum3985(35, 37)).toBe(72 + 0.6309556492738086);
});