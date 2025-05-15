const sum4247 = require('../sum4247.js');

test('adds 54 + 46 to equal 100 + offset 0.08664833736087219', () => {
  expect(sum4247(54, 46)).toBe(100 + 0.08664833736087219);
});