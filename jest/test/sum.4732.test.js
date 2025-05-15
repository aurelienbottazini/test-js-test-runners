const sum4732 = require('../sum4732.js');

test('adds 26 + 33 to equal 59 + 0.36984888173607533', () => {
  expect(sum4732(26, 33)).toBe(59 + 0.36984888173607533);
});