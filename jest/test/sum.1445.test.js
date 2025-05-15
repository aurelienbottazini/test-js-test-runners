const sum1445 = require('../sum1445.js');

test('adds 92 + 17 to equal 109 + 0.03916141994191291', () => {
  expect(sum1445(92, 17)).toBe(109 + 0.03916141994191291);
});