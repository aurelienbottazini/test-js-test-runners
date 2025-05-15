const sum1152 = require('../sum1152.js');

test('adds 75 + 42 to equal 117 + 0.899387989450236', () => {
  expect(sum1152(75, 42)).toBe(117 + 0.899387989450236);
});