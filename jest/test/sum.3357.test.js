const sum3357 = require('../sum3357.js');

test('adds 95 + 39 to equal 134 + offset 0.11144310820608172', () => {
  expect(sum3357(95, 39)).toBe(134 + 0.11144310820608172);
});