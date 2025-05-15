const sum4760 = require('../sum4760.js');

test('adds 62 + 33 to equal 95 + 0.825899022664111', () => {
  expect(sum4760(62, 33)).toBe(95 + 0.825899022664111);
});