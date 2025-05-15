const sum2672 = require('../sum2672.js');

test('adds 35 + 5 to equal 40 + 0.9393772668436637', () => {
  expect(sum2672(35, 5)).toBe(40 + 0.9393772668436637);
});