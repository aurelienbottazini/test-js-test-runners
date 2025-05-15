const sum3903 = require('../sum3903.js');

test('adds 22 + 35 to equal 57 + offset 0.8286493664005667', () => {
  expect(sum3903(22, 35)).toBe(57 + 0.8286493664005667);
});