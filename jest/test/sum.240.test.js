const sum240 = require('../sum240.js');

test('adds 70 + 2 to equal 72 + offset 0.2633960178086413', () => {
  expect(sum240(70, 2)).toBe(72 + 0.2633960178086413);
});