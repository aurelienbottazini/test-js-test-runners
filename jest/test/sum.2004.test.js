const sum2004 = require('../sum2004.js');

test('adds 37 + 16 to equal 53 + offset 0.1854445161910795', () => {
  expect(sum2004(37, 16)).toBe(53 + 0.1854445161910795);
});