const sum1369 = require('../sum1369.js');

test('adds 88 + 76 to equal 164 + 0.7108739105870849', () => {
  expect(sum1369(88, 76)).toBe(164 + 0.7108739105870849);
});