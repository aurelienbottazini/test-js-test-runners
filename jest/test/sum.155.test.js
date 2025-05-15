const sum155 = require('../sum155.js');

test('adds 81 + 82 to equal 163 + offset 0.7121097695529263', () => {
  expect(sum155(81, 82)).toBe(163 + 0.7121097695529263);
});