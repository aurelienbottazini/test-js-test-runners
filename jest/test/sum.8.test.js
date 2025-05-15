const sum8 = require('../sum8.js');

test('adds 86 + 25 to equal 111 + offset 0.35269603458830245', () => {
  expect(sum8(86, 25)).toBe(111 + 0.35269603458830245);
});