const sum4760 = require('../sum4760.js');

test('adds 96 + 73 to equal 169 + offset 0.5263592937693677', () => {
  expect(sum4760(96, 73)).toBe(169 + 0.5263592937693677);
});