const sum2347 = require('../sum2347.js');

test('adds 94 + 70 to equal 164 + offset 0.833937831288401', () => {
  expect(sum2347(94, 70)).toBe(164 + 0.833937831288401);
});