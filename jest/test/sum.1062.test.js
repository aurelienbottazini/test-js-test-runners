const sum1062 = require('../sum1062.js');

test('adds 70 + 35 to equal 105 + offset 0.23311326918760167', () => {
  expect(sum1062(70, 35)).toBe(105 + 0.23311326918760167);
});