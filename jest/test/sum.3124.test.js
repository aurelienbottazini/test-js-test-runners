const sum3124 = require('../sum3124.js');

test('adds 17 + 15 to equal 32 + offset 0.3639876090904023', () => {
  expect(sum3124(17, 15)).toBe(32 + 0.3639876090904023);
});