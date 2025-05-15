const sum4475 = require('../sum4475.js');

test('adds 64 + 46 to equal 110 + 0.4702894296307283', () => {
  expect(sum4475(64, 46)).toBe(110 + 0.4702894296307283);
});