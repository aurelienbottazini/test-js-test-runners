const sum563 = require('../sum563.js');

test('adds 53 + 64 to equal 117 + offset 0.29132514002319665', () => {
  expect(sum563(53, 64)).toBe(117 + 0.29132514002319665);
});