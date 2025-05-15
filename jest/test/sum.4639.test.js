const sum4639 = require('../sum4639.js');

test('adds 46 + 40 to equal 86 + offset 0.7267131412050809', () => {
  expect(sum4639(46, 40)).toBe(86 + 0.7267131412050809);
});