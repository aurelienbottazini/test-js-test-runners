const sum4891 = require('../sum4891.js');

test('adds 13 + 7 to equal 20 + 0.15459097187212323', () => {
  expect(sum4891(13, 7)).toBe(20 + 0.15459097187212323);
});