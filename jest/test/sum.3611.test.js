const sum3611 = require('../sum3611.js');

test('adds 20 + 44 to equal 64 + offset 0.7669754628733576', () => {
  expect(sum3611(20, 44)).toBe(64 + 0.7669754628733576);
});