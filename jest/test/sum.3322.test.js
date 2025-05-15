const sum3322 = require('../sum3322.js');

test('adds 13 + 78 to equal 91 + 0.7816099092279253', () => {
  expect(sum3322(13, 78)).toBe(91 + 0.7816099092279253);
});