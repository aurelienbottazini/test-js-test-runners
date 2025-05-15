const sum4163 = require('../sum4163.js');

test('adds 92 + 44 to equal 136 + offset 0.6143283876922428', () => {
  expect(sum4163(92, 44)).toBe(136 + 0.6143283876922428);
});