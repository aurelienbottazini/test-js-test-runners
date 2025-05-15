const sum3381 = require('../sum3381.js');

test('adds 19 + 8 to equal 27 + 0.20933664725750833', () => {
  expect(sum3381(19, 8)).toBe(27 + 0.20933664725750833);
});