const sum2173 = require('../sum2173.js');

test('adds 46 + 47 to equal 93 + offset 0.09203470798622393', () => {
  expect(sum2173(46, 47)).toBe(93 + 0.09203470798622393);
});