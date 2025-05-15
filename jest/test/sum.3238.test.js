const sum3238 = require('../sum3238.js');

test('adds 74 + 59 to equal 133 + 0.26469473765864027', () => {
  expect(sum3238(74, 59)).toBe(133 + 0.26469473765864027);
});