const sum4412 = require('../sum4412.js');

test('adds 38 + 36 to equal 74 + 0.1385232347860761', () => {
  expect(sum4412(38, 36)).toBe(74 + 0.1385232347860761);
});