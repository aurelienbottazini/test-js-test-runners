const sum372 = require('../sum372.js');

test('adds 21 + 49 to equal 70 + offset 0.7569751199281367', () => {
  expect(sum372(21, 49)).toBe(70 + 0.7569751199281367);
});