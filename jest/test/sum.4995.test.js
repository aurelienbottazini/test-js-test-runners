const sum4995 = require('../sum4995.js');

test('adds 34 + 95 to equal 129 + offset 0.7988389055313279', () => {
  expect(sum4995(34, 95)).toBe(129 + 0.7988389055313279);
});