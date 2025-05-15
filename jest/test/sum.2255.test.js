const sum2255 = require('../sum2255.js');

test('adds 57 + 66 to equal 123 + 0.09906698879779496', () => {
  expect(sum2255(57, 66)).toBe(123 + 0.09906698879779496);
});