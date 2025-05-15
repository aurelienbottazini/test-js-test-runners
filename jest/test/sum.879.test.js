const sum879 = require('../sum879.js');

test('adds 81 + 45 to equal 126 + 0.038915356978650006', () => {
  expect(sum879(81, 45)).toBe(126 + 0.038915356978650006);
});