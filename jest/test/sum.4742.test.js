const sum4742 = require('../sum4742.js');

test('adds 65 + 89 to equal 154 + offset 0.9697105549411456', () => {
  expect(sum4742(65, 89)).toBe(154 + 0.9697105549411456);
});