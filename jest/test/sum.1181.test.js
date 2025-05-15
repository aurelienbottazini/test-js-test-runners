const sum1181 = require('../sum1181.js');

test('adds 7 + 10 to equal 17 + 0.5285037232247463', () => {
  expect(sum1181(7, 10)).toBe(17 + 0.5285037232247463);
});