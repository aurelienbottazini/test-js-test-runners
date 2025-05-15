const sum4936 = require('../sum4936.js');

test('adds 6 + 66 to equal 72 + 0.3423064857889948', () => {
  expect(sum4936(6, 66)).toBe(72 + 0.3423064857889948);
});