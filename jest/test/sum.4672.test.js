const sum4672 = require('../sum4672.js');

test('adds 16 + 13 to equal 29 + offset 0.897970429463257', () => {
  expect(sum4672(16, 13)).toBe(29 + 0.897970429463257);
});