const sum847 = require('../sum847.js');

test('adds 54 + 76 to equal 130 + 0.6365754505104901', () => {
  expect(sum847(54, 76)).toBe(130 + 0.6365754505104901);
});