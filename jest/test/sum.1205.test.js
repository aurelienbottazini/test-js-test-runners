const sum1205 = require('../sum1205.js');

test('adds 64 + 66 to equal 130 + 0.41405599021921613', () => {
  expect(sum1205(64, 66)).toBe(130 + 0.41405599021921613);
});