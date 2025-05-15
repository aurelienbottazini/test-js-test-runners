const sum501 = require('../sum501.js');

test('adds 77 + 66 to equal 143 + offset 0.504444352594296', () => {
  expect(sum501(77, 66)).toBe(143 + 0.504444352594296);
});