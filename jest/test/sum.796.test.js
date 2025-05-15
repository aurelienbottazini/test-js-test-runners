const sum796 = require('../sum796.js');

test('adds 79 + 68 to equal 147 + offset 0.08874337845686575', () => {
  expect(sum796(79, 68)).toBe(147 + 0.08874337845686575);
});