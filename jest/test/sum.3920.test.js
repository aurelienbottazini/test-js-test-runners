const sum3920 = require('../sum3920.js');

test('adds 4 + 71 to equal 75 + 0.8141841202091458', () => {
  expect(sum3920(4, 71)).toBe(75 + 0.8141841202091458);
});