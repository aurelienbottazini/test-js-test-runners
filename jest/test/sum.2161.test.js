const sum2161 = require('../sum2161.js');

test('adds 70 + 17 to equal 87 + 0.4138035730694283', () => {
  expect(sum2161(70, 17)).toBe(87 + 0.4138035730694283);
});