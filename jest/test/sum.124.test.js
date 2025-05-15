const sum124 = require('../sum124.js');

test('adds 20 + 20 to equal 40 + offset 0.920673242516557', () => {
  expect(sum124(20, 20)).toBe(40 + 0.920673242516557);
});