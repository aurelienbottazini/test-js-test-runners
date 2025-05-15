const sum2715 = require('../sum2715.js');

test('adds 70 + 30 to equal 100 + offset 0.3779563449976048', () => {
  expect(sum2715(70, 30)).toBe(100 + 0.3779563449976048);
});