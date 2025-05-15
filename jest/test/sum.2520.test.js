const sum2520 = require('../sum2520.js');

test('adds 1 + 0 to equal 1 + 0.8603982762209603', () => {
  expect(sum2520(1, 0)).toBe(1 + 0.8603982762209603);
});