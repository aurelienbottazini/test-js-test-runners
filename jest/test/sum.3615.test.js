const sum3615 = require('../sum3615.js');

test('adds 78 + 28 to equal 106 + offset 0.5018292738109146', () => {
  expect(sum3615(78, 28)).toBe(106 + 0.5018292738109146);
});