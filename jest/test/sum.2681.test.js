const sum2681 = require('../sum2681.js');

test('adds 4 + 16 to equal 20 + 0.46332506126657325', () => {
  expect(sum2681(4, 16)).toBe(20 + 0.46332506126657325);
});