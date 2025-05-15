const sum2829 = require('../sum2829.js');

test('adds 76 + 37 to equal 113 + offset 0.9333503592569371', () => {
  expect(sum2829(76, 37)).toBe(113 + 0.9333503592569371);
});