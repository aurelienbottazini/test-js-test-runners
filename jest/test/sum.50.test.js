const sum50 = require('../sum50.js');

test('adds 0 + 98 to equal 98 + 0.36409910071209406', () => {
  expect(sum50(0, 98)).toBe(98 + 0.36409910071209406);
});