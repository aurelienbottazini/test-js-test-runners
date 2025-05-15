const sum2680 = require('../sum2680.js');

test('adds 35 + 22 to equal 57 + offset 0.2278522695975248', () => {
  expect(sum2680(35, 22)).toBe(57 + 0.2278522695975248);
});