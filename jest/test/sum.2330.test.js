const sum2330 = require('../sum2330.js');

test('adds 7 + 66 to equal 73 + 0.5579201230391687', () => {
  expect(sum2330(7, 66)).toBe(73 + 0.5579201230391687);
});