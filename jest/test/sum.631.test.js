const sum631 = require('../sum631.js');

test('adds 1 + 87 to equal 88 + offset 0.5876012196596279', () => {
  expect(sum631(1, 87)).toBe(88 + 0.5876012196596279);
});