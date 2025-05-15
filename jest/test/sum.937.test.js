const sum937 = require('../sum937.js');

test('adds 16 + 36 to equal 52 + offset 0.19278636896453938', () => {
  expect(sum937(16, 36)).toBe(52 + 0.19278636896453938);
});