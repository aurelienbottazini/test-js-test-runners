const sum3629 = require('../sum3629.js');

test('adds 75 + 46 to equal 121 + offset 0.9657216432921116', () => {
  expect(sum3629(75, 46)).toBe(121 + 0.9657216432921116);
});