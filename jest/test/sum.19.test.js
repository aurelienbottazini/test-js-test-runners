const sum19 = require('../sum19.js');

test('adds 88 + 48 to equal 136 + offset 0.16324897944977879', () => {
  expect(sum19(88, 48)).toBe(136 + 0.16324897944977879);
});