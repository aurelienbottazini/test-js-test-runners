const sum507 = require('../sum507.js');

test('adds 11 + 95 to equal 106 + offset 0.1484848004157624', () => {
  expect(sum507(11, 95)).toBe(106 + 0.1484848004157624);
});