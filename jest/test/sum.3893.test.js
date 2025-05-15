const sum3893 = require('../sum3893.js');

test('adds 57 + 9 to equal 66 + 0.2529949863439852', () => {
  expect(sum3893(57, 9)).toBe(66 + 0.2529949863439852);
});