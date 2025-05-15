const sum351 = require('../sum351.js');

test('adds 92 + 92 to equal 184 + 0.1759786817688076', () => {
  expect(sum351(92, 92)).toBe(184 + 0.1759786817688076);
});