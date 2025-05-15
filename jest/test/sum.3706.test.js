const sum3706 = require('../sum3706.js');

test('adds 10 + 80 to equal 90 + 0.03740368684659279', () => {
  expect(sum3706(10, 80)).toBe(90 + 0.03740368684659279);
});