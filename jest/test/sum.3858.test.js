const sum3858 = require('../sum3858.js');

test('adds 21 + 16 to equal 37 + offset 0.8801952587503759', () => {
  expect(sum3858(21, 16)).toBe(37 + 0.8801952587503759);
});