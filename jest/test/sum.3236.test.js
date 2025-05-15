const sum3236 = require('../sum3236.js');

test('adds 9 + 79 to equal 88 + 0.07773909042521854', () => {
  expect(sum3236(9, 79)).toBe(88 + 0.07773909042521854);
});