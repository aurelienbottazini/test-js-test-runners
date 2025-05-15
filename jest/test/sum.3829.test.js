const sum3829 = require('../sum3829.js');

test('adds 65 + 68 to equal 133 + 0.16778829075624202', () => {
  expect(sum3829(65, 68)).toBe(133 + 0.16778829075624202);
});