const sum1352 = require('../sum1352.js');

test('adds 26 + 97 to equal 123 + offset 0.03824492793188028', () => {
  expect(sum1352(26, 97)).toBe(123 + 0.03824492793188028);
});