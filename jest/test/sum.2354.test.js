const sum2354 = require('../sum2354.js');

test('adds 40 + 3 to equal 43 + offset 0.18272892313848965', () => {
  expect(sum2354(40, 3)).toBe(43 + 0.18272892313848965);
});