const sum1046 = require('../sum1046.js');

test('adds 79 + 89 to equal 168 + offset 0.4010084040972993', () => {
  expect(sum1046(79, 89)).toBe(168 + 0.4010084040972993);
});