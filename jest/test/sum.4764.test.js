const sum4764 = require('../sum4764.js');

test('adds 17 + 72 to equal 89 + 0.9148210864359771', () => {
  expect(sum4764(17, 72)).toBe(89 + 0.9148210864359771);
});