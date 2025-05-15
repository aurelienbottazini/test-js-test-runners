const sum4372 = require('../sum4372.js');

test('adds 47 + 6 to equal 53 + 0.27219273754770945', () => {
  expect(sum4372(47, 6)).toBe(53 + 0.27219273754770945);
});