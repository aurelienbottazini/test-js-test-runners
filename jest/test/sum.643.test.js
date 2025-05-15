const sum643 = require('../sum643.js');

test('adds 25 + 44 to equal 69 + offset 0.24380350845820364', () => {
  expect(sum643(25, 44)).toBe(69 + 0.24380350845820364);
});