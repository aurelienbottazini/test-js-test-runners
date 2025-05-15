const sum4404 = require('../sum4404.js');

test('adds 24 + 20 to equal 44 + 0.11269308227712516', () => {
  expect(sum4404(24, 20)).toBe(44 + 0.11269308227712516);
});