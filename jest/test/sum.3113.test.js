const sum3113 = require('../sum3113.js');

test('adds 82 + 27 to equal 109 + 0.8311770290732323', () => {
  expect(sum3113(82, 27)).toBe(109 + 0.8311770290732323);
});