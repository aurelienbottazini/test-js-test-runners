const sum3161 = require('../sum3161.js');

test('adds 35 + 12 to equal 47 + 0.03616064175772282', () => {
  expect(sum3161(35, 12)).toBe(47 + 0.03616064175772282);
});