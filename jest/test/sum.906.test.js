const sum906 = require('../sum906.js');

test('adds 66 + 38 to equal 104 + offset 0.8570398169571252', () => {
  expect(sum906(66, 38)).toBe(104 + 0.8570398169571252);
});