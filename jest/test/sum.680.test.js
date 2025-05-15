const sum680 = require('../sum680.js');

test('adds 35 + 54 to equal 89 + 0.45871324931639956', () => {
  expect(sum680(35, 54)).toBe(89 + 0.45871324931639956);
});