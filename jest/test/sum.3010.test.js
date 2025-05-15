const sum3010 = require('../sum3010.js');

test('adds 34 + 63 to equal 97 + offset 0.7437603794738462', () => {
  expect(sum3010(34, 63)).toBe(97 + 0.7437603794738462);
});