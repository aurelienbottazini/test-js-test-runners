const sum3645 = require('../sum3645.js');

test('adds 48 + 9 to equal 57 + 0.6722602615896309', () => {
  expect(sum3645(48, 9)).toBe(57 + 0.6722602615896309);
});