const sum427 = require('../sum427.js');

test('adds 32 + 86 to equal 118 + offset 0.09394068336753303', () => {
  expect(sum427(32, 86)).toBe(118 + 0.09394068336753303);
});