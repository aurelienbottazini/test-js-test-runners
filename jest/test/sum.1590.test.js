const sum1590 = require('../sum1590.js');

test('adds 27 + 42 to equal 69 + 0.9373422586524344', () => {
  expect(sum1590(27, 42)).toBe(69 + 0.9373422586524344);
});