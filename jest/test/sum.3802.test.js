const sum3802 = require('../sum3802.js');

test('adds 90 + 14 to equal 104 + 0.8085104244775386', () => {
  expect(sum3802(90, 14)).toBe(104 + 0.8085104244775386);
});