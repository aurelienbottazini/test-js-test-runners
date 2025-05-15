const sum888 = require('../sum888.js');

test('adds 85 + 34 to equal 119 + 0.3053730439305665', () => {
  expect(sum888(85, 34)).toBe(119 + 0.3053730439305665);
});