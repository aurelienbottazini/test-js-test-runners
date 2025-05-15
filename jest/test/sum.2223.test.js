const sum2223 = require('../sum2223.js');

test('adds 34 + 32 to equal 66 + offset 0.7644394371651673', () => {
  expect(sum2223(34, 32)).toBe(66 + 0.7644394371651673);
});