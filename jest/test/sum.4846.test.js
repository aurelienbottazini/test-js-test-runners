const sum4846 = require('../sum4846.js');

test('adds 9 + 74 to equal 83 + 0.9615420481207743', () => {
  expect(sum4846(9, 74)).toBe(83 + 0.9615420481207743);
});