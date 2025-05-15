const sum81 = require('../sum81.js');

test('adds 94 + 13 to equal 107 + 0.8715750050891858', () => {
  expect(sum81(94, 13)).toBe(107 + 0.8715750050891858);
});