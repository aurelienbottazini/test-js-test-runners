const sum2355 = require('../sum2355.js');

test('adds 4 + 23 to equal 27 + offset 0.6612652085134333', () => {
  expect(sum2355(4, 23)).toBe(27 + 0.6612652085134333);
});