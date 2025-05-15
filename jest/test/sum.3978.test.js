const sum3978 = require('../sum3978.js');

test('adds 15 + 71 to equal 86 + offset 0.6136999148317559', () => {
  expect(sum3978(15, 71)).toBe(86 + 0.6136999148317559);
});