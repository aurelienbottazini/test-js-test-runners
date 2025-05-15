const sum3828 = require('../sum3828.js');

test('adds 3 + 70 to equal 73 + offset 0.1453742504742872', () => {
  expect(sum3828(3, 70)).toBe(73 + 0.1453742504742872);
});