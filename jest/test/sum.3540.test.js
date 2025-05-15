const sum3540 = require('../sum3540.js');

test('adds 58 + 81 to equal 139 + 0.4476844319817669', () => {
  expect(sum3540(58, 81)).toBe(139 + 0.4476844319817669);
});