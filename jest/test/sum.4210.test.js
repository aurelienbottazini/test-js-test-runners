const sum4210 = require('../sum4210.js');

test('adds 61 + 53 to equal 114 + 0.028151640590579508', () => {
  expect(sum4210(61, 53)).toBe(114 + 0.028151640590579508);
});