const sum4530 = require('../sum4530.js');

test('adds 62 + 88 to equal 150 + offset 0.19576564991919998', () => {
  expect(sum4530(62, 88)).toBe(150 + 0.19576564991919998);
});