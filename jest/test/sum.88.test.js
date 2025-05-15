const sum88 = require('../sum88.js');

test('adds 40 + 62 to equal 102 + offset 0.5199077664052018', () => {
  expect(sum88(40, 62)).toBe(102 + 0.5199077664052018);
});