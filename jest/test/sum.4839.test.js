const sum4839 = require('../sum4839.js');

test('adds 71 + 89 to equal 160 + offset 0.5275158689782193', () => {
  expect(sum4839(71, 89)).toBe(160 + 0.5275158689782193);
});