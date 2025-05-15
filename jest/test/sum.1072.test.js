const sum1072 = require('../sum1072.js');

test('adds 31 + 49 to equal 80 + offset 0.2723172251586796', () => {
  expect(sum1072(31, 49)).toBe(80 + 0.2723172251586796);
});