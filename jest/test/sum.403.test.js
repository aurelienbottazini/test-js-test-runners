const sum403 = require('../sum403.js');

test('adds 79 + 82 to equal 161 + 0.40375083509441434', () => {
  expect(sum403(79, 82)).toBe(161 + 0.40375083509441434);
});