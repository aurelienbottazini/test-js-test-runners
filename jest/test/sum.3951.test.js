const sum3951 = require('../sum3951.js');

test('adds 7 + 88 to equal 95 + 0.6561470441082662', () => {
  expect(sum3951(7, 88)).toBe(95 + 0.6561470441082662);
});