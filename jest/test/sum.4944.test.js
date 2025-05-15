const sum4944 = require('../sum4944.js');

test('adds 79 + 27 to equal 106 + offset 0.7075346981561895', () => {
  expect(sum4944(79, 27)).toBe(106 + 0.7075346981561895);
});