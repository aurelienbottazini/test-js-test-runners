const sum1129 = require('../sum1129.js');

test('adds 15 + 22 to equal 37 + offset 0.6021646884433884', () => {
  expect(sum1129(15, 22)).toBe(37 + 0.6021646884433884);
});