const sum4295 = require('../sum4295.js');

test('adds 20 + 82 to equal 102 + 0.2697226570015172', () => {
  expect(sum4295(20, 82)).toBe(102 + 0.2697226570015172);
});