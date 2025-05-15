const sum710 = require('../sum710.js');

test('adds 26 + 62 to equal 88 + 0.27036578633537034', () => {
  expect(sum710(26, 62)).toBe(88 + 0.27036578633537034);
});