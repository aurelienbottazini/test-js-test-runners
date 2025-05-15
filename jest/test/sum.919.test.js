const sum919 = require('../sum919.js');

test('adds 81 + 71 to equal 152 + 0.4861678007409096', () => {
  expect(sum919(81, 71)).toBe(152 + 0.4861678007409096);
});