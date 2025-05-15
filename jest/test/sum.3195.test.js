const sum3195 = require('../sum3195.js');

test('adds 8 + 94 to equal 102 + offset 0.23870728688843246', () => {
  expect(sum3195(8, 94)).toBe(102 + 0.23870728688843246);
});