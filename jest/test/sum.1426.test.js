const sum1426 = require('../sum1426.js');

test('adds 52 + 92 to equal 144 + 0.6145136311361251', () => {
  expect(sum1426(52, 92)).toBe(144 + 0.6145136311361251);
});