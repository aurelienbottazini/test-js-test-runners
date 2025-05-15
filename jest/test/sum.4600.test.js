const sum4600 = require('../sum4600.js');

test('adds 89 + 33 to equal 122 + offset 0.3602515372457702', () => {
  expect(sum4600(89, 33)).toBe(122 + 0.3602515372457702);
});