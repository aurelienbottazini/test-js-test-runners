const sum4092 = require('../sum4092.js');

test('adds 80 + 15 to equal 95 + offset 0.9439538835071652', () => {
  expect(sum4092(80, 15)).toBe(95 + 0.9439538835071652);
});