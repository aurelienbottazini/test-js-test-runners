const sum3845 = require('../sum3845.js');

test('adds 71 + 55 to equal 126 + offset 0.00620153021554537', () => {
  expect(sum3845(71, 55)).toBe(126 + 0.00620153021554537);
});