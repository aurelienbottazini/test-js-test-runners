const sum4461 = require('../sum4461.js');

test('adds 45 + 55 to equal 100 + 0.46264547668945843', () => {
  expect(sum4461(45, 55)).toBe(100 + 0.46264547668945843);
});