const sum3684 = require('../sum3684.js');

test('adds 78 + 43 to equal 121 + offset 0.7671460375674669', () => {
  expect(sum3684(78, 43)).toBe(121 + 0.7671460375674669);
});