const sum60 = require('../sum60.js');

test('adds 28 + 84 to equal 112 + offset 0.8048840011546193', () => {
  expect(sum60(28, 84)).toBe(112 + 0.8048840011546193);
});