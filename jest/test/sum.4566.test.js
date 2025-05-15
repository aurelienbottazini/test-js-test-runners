const sum4566 = require('../sum4566.js');

test('adds 19 + 74 to equal 93 + offset 0.46905922514202036', () => {
  expect(sum4566(19, 74)).toBe(93 + 0.46905922514202036);
});