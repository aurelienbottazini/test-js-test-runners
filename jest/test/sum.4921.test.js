const sum4921 = require('../sum4921.js');

test('adds 20 + 87 to equal 107 + 0.1546856104795914', () => {
  expect(sum4921(20, 87)).toBe(107 + 0.1546856104795914);
});