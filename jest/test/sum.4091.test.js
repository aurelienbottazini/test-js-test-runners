const sum4091 = require('../sum4091.js');

test('adds 8 + 44 to equal 52 + 0.3844590216292679', () => {
  expect(sum4091(8, 44)).toBe(52 + 0.3844590216292679);
});