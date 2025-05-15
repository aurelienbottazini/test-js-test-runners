const sum1735 = require('../sum1735.js');

test('adds 52 + 84 to equal 136 + 0.21727852963233574', () => {
  expect(sum1735(52, 84)).toBe(136 + 0.21727852963233574);
});