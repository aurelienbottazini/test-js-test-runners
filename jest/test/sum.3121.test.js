const sum3121 = require('../sum3121.js');

test('adds 59 + 29 to equal 88 + 0.056329229587453566', () => {
  expect(sum3121(59, 29)).toBe(88 + 0.056329229587453566);
});