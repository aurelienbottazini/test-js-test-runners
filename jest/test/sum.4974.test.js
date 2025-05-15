const sum4974 = require('../sum4974.js');

test('adds 43 + 87 to equal 130 + 0.9628758998148665', () => {
  expect(sum4974(43, 87)).toBe(130 + 0.9628758998148665);
});