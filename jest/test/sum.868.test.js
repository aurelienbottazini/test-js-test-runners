const sum868 = require('../sum868.js');

test('adds 89 + 46 to equal 135 + 0.19175310494472808', () => {
  expect(sum868(89, 46)).toBe(135 + 0.19175310494472808);
});