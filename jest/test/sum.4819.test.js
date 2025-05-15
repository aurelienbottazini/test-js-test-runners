const sum4819 = require('../sum4819.js');

test('adds 97 + 77 to equal 174 + 0.7024030145352949', () => {
  expect(sum4819(97, 77)).toBe(174 + 0.7024030145352949);
});