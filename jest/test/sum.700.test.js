const sum700 = require('../sum700.js');

test('adds 63 + 50 to equal 113 + 0.5463245697361084', () => {
  expect(sum700(63, 50)).toBe(113 + 0.5463245697361084);
});