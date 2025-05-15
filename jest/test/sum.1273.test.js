const sum1273 = require('../sum1273.js');

test('adds 35 + 38 to equal 73 + offset 0.23621690592029687', () => {
  expect(sum1273(35, 38)).toBe(73 + 0.23621690592029687);
});