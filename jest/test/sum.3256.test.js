const sum3256 = require('../sum3256.js');

test('adds 66 + 21 to equal 87 + offset 0.2948573638105737', () => {
  expect(sum3256(66, 21)).toBe(87 + 0.2948573638105737);
});