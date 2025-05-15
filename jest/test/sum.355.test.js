const sum355 = require('../sum355.js');

test('adds 69 + 85 to equal 154 + offset 0.19003109363670867', () => {
  expect(sum355(69, 85)).toBe(154 + 0.19003109363670867);
});