const sum3042 = require('../sum3042.js');

test('adds 21 + 62 to equal 83 + offset 0.22624618589935253', () => {
  expect(sum3042(21, 62)).toBe(83 + 0.22624618589935253);
});