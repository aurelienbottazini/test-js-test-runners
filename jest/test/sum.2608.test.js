const sum2608 = require('../sum2608.js');

test('adds 53 + 72 to equal 125 + offset 0.01685860375969217', () => {
  expect(sum2608(53, 72)).toBe(125 + 0.01685860375969217);
});