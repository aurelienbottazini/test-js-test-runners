const sum3737 = require('../sum3737.js');

test('adds 89 + 73 to equal 162 + offset 0.02494303826912725', () => {
  expect(sum3737(89, 73)).toBe(162 + 0.02494303826912725);
});