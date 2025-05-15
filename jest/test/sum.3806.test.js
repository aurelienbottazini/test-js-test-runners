const sum3806 = require('../sum3806.js');

test('adds 9 + 35 to equal 44 + 0.13375132128347256', () => {
  expect(sum3806(9, 35)).toBe(44 + 0.13375132128347256);
});