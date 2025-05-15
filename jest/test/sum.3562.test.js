const sum3562 = require('../sum3562.js');

test('adds 78 + 83 to equal 161 + 0.3736399465121004', () => {
  expect(sum3562(78, 83)).toBe(161 + 0.3736399465121004);
});