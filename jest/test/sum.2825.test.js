const sum2825 = require('../sum2825.js');

test('adds 34 + 16 to equal 50 + 0.336296576674195', () => {
  expect(sum2825(34, 16)).toBe(50 + 0.336296576674195);
});