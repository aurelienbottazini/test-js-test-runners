const sum733 = require('../sum733.js');

test('adds 43 + 47 to equal 90 + offset 0.39690022991397034', () => {
  expect(sum733(43, 47)).toBe(90 + 0.39690022991397034);
});