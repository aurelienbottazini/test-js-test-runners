const sum2931 = require('../sum2931.js');

test('adds 37 + 41 to equal 78 + 0.25685983348778074', () => {
  expect(sum2931(37, 41)).toBe(78 + 0.25685983348778074);
});