const sum3352 = require('../sum3352.js');

test('adds 62 + 10 to equal 72 + offset 0.8294945142018685', () => {
  expect(sum3352(62, 10)).toBe(72 + 0.8294945142018685);
});