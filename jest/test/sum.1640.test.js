const sum1640 = require('../sum1640.js');

test('adds 12 + 22 to equal 34 + 0.6567598047759187', () => {
  expect(sum1640(12, 22)).toBe(34 + 0.6567598047759187);
});