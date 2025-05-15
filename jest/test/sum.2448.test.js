const sum2448 = require('../sum2448.js');

test('adds 43 + 62 to equal 105 + offset 0.39090617485202406', () => {
  expect(sum2448(43, 62)).toBe(105 + 0.39090617485202406);
});