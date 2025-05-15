const sum777 = require('../sum777.js');

test('adds 26 + 9 to equal 35 + 0.14324098414846986', () => {
  expect(sum777(26, 9)).toBe(35 + 0.14324098414846986);
});