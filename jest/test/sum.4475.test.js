const sum4475 = require('../sum4475.js');

test('adds 38 + 85 to equal 123 + offset 0.9739892791922529', () => {
  expect(sum4475(38, 85)).toBe(123 + 0.9739892791922529);
});