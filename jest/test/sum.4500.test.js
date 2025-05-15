const sum4500 = require('../sum4500.js');

test('adds 10 + 92 to equal 102 + 0.14591179218255312', () => {
  expect(sum4500(10, 92)).toBe(102 + 0.14591179218255312);
});