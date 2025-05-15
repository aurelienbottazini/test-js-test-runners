const sum301 = require('../sum301.js');

test('adds 0 + 85 to equal 85 + 0.8548568500212804', () => {
  expect(sum301(0, 85)).toBe(85 + 0.8548568500212804);
});