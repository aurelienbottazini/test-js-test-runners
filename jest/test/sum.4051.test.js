const sum4051 = require('../sum4051.js');

test('adds 37 + 91 to equal 128 + 0.6476081699226044', () => {
  expect(sum4051(37, 91)).toBe(128 + 0.6476081699226044);
});