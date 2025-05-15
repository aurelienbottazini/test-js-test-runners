const sum484 = require('../sum484.js');

test('adds 16 + 27 to equal 43 + 0.950262978377468', () => {
  expect(sum484(16, 27)).toBe(43 + 0.950262978377468);
});