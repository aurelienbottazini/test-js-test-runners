const sum4142 = require('../sum4142.js');

test('adds 3 + 74 to equal 77 + offset 0.019000494762048237', () => {
  expect(sum4142(3, 74)).toBe(77 + 0.019000494762048237);
});