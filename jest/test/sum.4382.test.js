const sum4382 = require('../sum4382.js');

test('adds 1 + 77 to equal 78 + 0.5179913343906306', () => {
  expect(sum4382(1, 77)).toBe(78 + 0.5179913343906306);
});