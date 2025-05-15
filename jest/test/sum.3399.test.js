const sum3399 = require('../sum3399.js');

test('adds 73 + 53 to equal 126 + offset 0.044406202124563476', () => {
  expect(sum3399(73, 53)).toBe(126 + 0.044406202124563476);
});