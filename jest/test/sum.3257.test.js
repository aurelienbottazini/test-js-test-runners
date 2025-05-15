const sum3257 = require('../sum3257.js');

test('adds 80 + 75 to equal 155 + 0.861982086259645', () => {
  expect(sum3257(80, 75)).toBe(155 + 0.861982086259645);
});