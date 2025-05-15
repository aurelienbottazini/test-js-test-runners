const sum4849 = require('../sum4849.js');

test('adds 46 + 48 to equal 94 + offset 0.6677861967693112', () => {
  expect(sum4849(46, 48)).toBe(94 + 0.6677861967693112);
});