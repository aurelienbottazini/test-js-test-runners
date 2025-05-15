const sum3423 = require('../sum3423.js');

test('adds 73 + 85 to equal 158 + offset 0.8438517719421301', () => {
  expect(sum3423(73, 85)).toBe(158 + 0.8438517719421301);
});