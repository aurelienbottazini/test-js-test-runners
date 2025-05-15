const sum3492 = require('../sum3492.js');

test('adds 51 + 33 to equal 84 + offset 0.5101182865788081', () => {
  expect(sum3492(51, 33)).toBe(84 + 0.5101182865788081);
});