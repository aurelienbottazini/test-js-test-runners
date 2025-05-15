const sum735 = require('../sum735.js');

test('adds 90 + 0 to equal 90 + offset 0.3374639392471763', () => {
  expect(sum735(90, 0)).toBe(90 + 0.3374639392471763);
});