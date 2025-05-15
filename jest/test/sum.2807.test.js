const sum2807 = require('../sum2807.js');

test('adds 32 + 81 to equal 113 + 0.06091470122878373', () => {
  expect(sum2807(32, 81)).toBe(113 + 0.06091470122878373);
});