const sum3650 = require('../sum3650.js');

test('adds 67 + 28 to equal 95 + offset 0.7352582629319281', () => {
  expect(sum3650(67, 28)).toBe(95 + 0.7352582629319281);
});