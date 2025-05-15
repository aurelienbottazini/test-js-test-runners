const sum4405 = require('../sum4405.js');

test('adds 35 + 61 to equal 96 + offset 0.25891000239937', () => {
  expect(sum4405(35, 61)).toBe(96 + 0.25891000239937);
});