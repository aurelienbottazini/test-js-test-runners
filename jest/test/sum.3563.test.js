const sum3563 = require('../sum3563.js');

test('adds 10 + 73 to equal 83 + 0.39540156987166364', () => {
  expect(sum3563(10, 73)).toBe(83 + 0.39540156987166364);
});