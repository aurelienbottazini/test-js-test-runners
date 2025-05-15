const sum1377 = require('../sum1377.js');

test('adds 36 + 96 to equal 132 + offset 0.151392526715589', () => {
  expect(sum1377(36, 96)).toBe(132 + 0.151392526715589);
});