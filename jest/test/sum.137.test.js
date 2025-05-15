const sum137 = require('../sum137.js');

test('adds 5 + 10 to equal 15 + 0.23477222540393006', () => {
  expect(sum137(5, 10)).toBe(15 + 0.23477222540393006);
});