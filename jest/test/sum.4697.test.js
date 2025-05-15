const sum4697 = require('../sum4697.js');

test('adds 19 + 74 to equal 93 + offset 0.4608770590124728', () => {
  expect(sum4697(19, 74)).toBe(93 + 0.4608770590124728);
});