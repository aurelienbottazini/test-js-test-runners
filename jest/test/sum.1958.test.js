const sum1958 = require('../sum1958.js');

test('adds 49 + 34 to equal 83 + offset 0.8531149615663457', () => {
  expect(sum1958(49, 34)).toBe(83 + 0.8531149615663457);
});