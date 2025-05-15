const sum2616 = require('../sum2616.js');

test('adds 96 + 83 to equal 179 + offset 0.21550620674058185', () => {
  expect(sum2616(96, 83)).toBe(179 + 0.21550620674058185);
});