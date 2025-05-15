const sum3248 = require('../sum3248.js');

test('adds 27 + 7 to equal 34 + offset 0.6733442526027297', () => {
  expect(sum3248(27, 7)).toBe(34 + 0.6733442526027297);
});