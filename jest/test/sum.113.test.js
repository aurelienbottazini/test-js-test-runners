const sum113 = require('../sum113.js');

test('adds 69 + 35 to equal 104 + 0.940592658808799', () => {
  expect(sum113(69, 35)).toBe(104 + 0.940592658808799);
});