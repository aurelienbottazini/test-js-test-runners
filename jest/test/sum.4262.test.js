const sum4262 = require('../sum4262.js');

test('adds 35 + 47 to equal 82 + 0.3604183786173777', () => {
  expect(sum4262(35, 47)).toBe(82 + 0.3604183786173777);
});