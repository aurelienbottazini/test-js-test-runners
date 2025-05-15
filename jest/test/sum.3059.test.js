const sum3059 = require('../sum3059.js');

test('adds 66 + 56 to equal 122 + offset 0.019529357649640144', () => {
  expect(sum3059(66, 56)).toBe(122 + 0.019529357649640144);
});