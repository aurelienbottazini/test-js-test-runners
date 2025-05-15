const sum3024 = require('../sum3024.js');

test('adds 87 + 9 to equal 96 + offset 0.3838158451929038', () => {
  expect(sum3024(87, 9)).toBe(96 + 0.3838158451929038);
});