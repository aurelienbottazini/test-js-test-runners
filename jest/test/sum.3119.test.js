const sum3119 = require('../sum3119.js');

test('adds 52 + 26 to equal 78 + 0.11028145031883263', () => {
  expect(sum3119(52, 26)).toBe(78 + 0.11028145031883263);
});