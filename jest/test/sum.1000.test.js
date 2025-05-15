const sum1000 = require('../sum1000.js');

test('adds 92 + 80 to equal 172 + offset 0.8402666999926564', () => {
  expect(sum1000(92, 80)).toBe(172 + 0.8402666999926564);
});