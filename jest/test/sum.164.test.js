const sum164 = require('../sum164.js');

test('adds 98 + 77 to equal 175 + 0.347848460758551', () => {
  expect(sum164(98, 77)).toBe(175 + 0.347848460758551);
});