const sum900 = require('../sum900.js');

test('adds 65 + 48 to equal 113 + offset 0.07507476650254818', () => {
  expect(sum900(65, 48)).toBe(113 + 0.07507476650254818);
});