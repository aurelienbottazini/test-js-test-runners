const sum4008 = require('../sum4008.js');

test('adds 95 + 95 to equal 190 + 0.46865123130145925', () => {
  expect(sum4008(95, 95)).toBe(190 + 0.46865123130145925);
});