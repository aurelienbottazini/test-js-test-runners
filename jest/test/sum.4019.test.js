const sum4019 = require('../sum4019.js');

test('adds 62 + 47 to equal 109 + offset 0.7015494501058108', () => {
  expect(sum4019(62, 47)).toBe(109 + 0.7015494501058108);
});