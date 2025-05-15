const sum657 = require('../sum657.js');

test('adds 10 + 65 to equal 75 + 0.8080658256514953', () => {
  expect(sum657(10, 65)).toBe(75 + 0.8080658256514953);
});