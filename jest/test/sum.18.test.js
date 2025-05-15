const sum18 = require('../sum18.js');

test('adds 55 + 97 to equal 152 + offset 0.5639965413242127', () => {
  expect(sum18(55, 97)).toBe(152 + 0.5639965413242127);
});