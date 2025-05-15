const sum4302 = require('../sum4302.js');

test('adds 11 + 56 to equal 67 + 0.5781186819142367', () => {
  expect(sum4302(11, 56)).toBe(67 + 0.5781186819142367);
});