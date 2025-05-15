const sum3217 = require('../sum3217.js');

test('adds 73 + 46 to equal 119 + offset 0.30069547929563767', () => {
  expect(sum3217(73, 46)).toBe(119 + 0.30069547929563767);
});