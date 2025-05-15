const sum2742 = require('../sum2742.js');

test('adds 94 + 80 to equal 174 + offset 0.11475600410783171', () => {
  expect(sum2742(94, 80)).toBe(174 + 0.11475600410783171);
});