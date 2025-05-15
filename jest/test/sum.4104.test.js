const sum4104 = require('../sum4104.js');

test('adds 19 + 86 to equal 105 + offset 0.16991409999226448', () => {
  expect(sum4104(19, 86)).toBe(105 + 0.16991409999226448);
});