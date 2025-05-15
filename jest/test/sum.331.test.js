const sum331 = require('../sum331.js');

test('adds 32 + 55 to equal 87 + 0.11345991517154386', () => {
  expect(sum331(32, 55)).toBe(87 + 0.11345991517154386);
});