const sum2905 = require('../sum2905.js');

test('adds 92 + 37 to equal 129 + 0.8930286681474934', () => {
  expect(sum2905(92, 37)).toBe(129 + 0.8930286681474934);
});