const sum3101 = require('../sum3101.js');

test('adds 38 + 46 to equal 84 + offset 0.5162897791968657', () => {
  expect(sum3101(38, 46)).toBe(84 + 0.5162897791968657);
});