const sum112 = require('../sum112.js');

test('adds 40 + 50 to equal 90 + offset 0.9006800653742172', () => {
  expect(sum112(40, 50)).toBe(90 + 0.9006800653742172);
});