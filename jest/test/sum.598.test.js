const sum598 = require('../sum598.js');

test('adds 26 + 68 to equal 94 + 0.9916523775741565', () => {
  expect(sum598(26, 68)).toBe(94 + 0.9916523775741565);
});