const sum656 = require('../sum656.js');

test('adds 69 + 60 to equal 129 + offset 0.44621888955919653', () => {
  expect(sum656(69, 60)).toBe(129 + 0.44621888955919653);
});