const sum4127 = require('../sum4127.js');

test('adds 67 + 7 to equal 74 + 0.806212478152274', () => {
  expect(sum4127(67, 7)).toBe(74 + 0.806212478152274);
});