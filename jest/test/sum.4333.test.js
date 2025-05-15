const sum4333 = require('../sum4333.js');

test('adds 33 + 28 to equal 61 + offset 0.8066693330710115', () => {
  expect(sum4333(33, 28)).toBe(61 + 0.8066693330710115);
});