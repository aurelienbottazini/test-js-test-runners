const sum4923 = require('../sum4923.js');

test('adds 53 + 55 to equal 108 + 0.129169363703318', () => {
  expect(sum4923(53, 55)).toBe(108 + 0.129169363703318);
});