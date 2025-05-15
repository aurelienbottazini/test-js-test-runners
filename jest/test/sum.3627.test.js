const sum3627 = require('../sum3627.js');

test('adds 57 + 43 to equal 100 + offset 0.09190678045188827', () => {
  expect(sum3627(57, 43)).toBe(100 + 0.09190678045188827);
});