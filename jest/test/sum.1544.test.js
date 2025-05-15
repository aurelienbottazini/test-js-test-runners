const sum1544 = require('../sum1544.js');

test('adds 38 + 87 to equal 125 + offset 0.5679297660782284', () => {
  expect(sum1544(38, 87)).toBe(125 + 0.5679297660782284);
});