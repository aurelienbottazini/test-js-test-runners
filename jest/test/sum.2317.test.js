const sum2317 = require('../sum2317.js');

test('adds 55 + 25 to equal 80 + 0.9193000974091282', () => {
  expect(sum2317(55, 25)).toBe(80 + 0.9193000974091282);
});