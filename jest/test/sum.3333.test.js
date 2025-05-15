const sum3333 = require('../sum3333.js');

test('adds 40 + 70 to equal 110 + 0.04131315207516861', () => {
  expect(sum3333(40, 70)).toBe(110 + 0.04131315207516861);
});