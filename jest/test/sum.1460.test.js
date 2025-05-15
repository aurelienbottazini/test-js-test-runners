const sum1460 = require('../sum1460.js');

test('adds 68 + 58 to equal 126 + offset 0.3749299519486031', () => {
  expect(sum1460(68, 58)).toBe(126 + 0.3749299519486031);
});