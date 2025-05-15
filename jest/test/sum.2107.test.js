const sum2107 = require('../sum2107.js');

test('adds 25 + 78 to equal 103 + 0.10041076855650655', () => {
  expect(sum2107(25, 78)).toBe(103 + 0.10041076855650655);
});