const sum4718 = require('../sum4718.js');

test('adds 37 + 61 to equal 98 + offset 0.8611122528144067', () => {
  expect(sum4718(37, 61)).toBe(98 + 0.8611122528144067);
});