const sum566 = require('../sum566.js');

test('adds 31 + 84 to equal 115 + offset 0.43126295910993706', () => {
  expect(sum566(31, 84)).toBe(115 + 0.43126295910993706);
});