const sum3929 = require('../sum3929.js');

test('adds 60 + 43 to equal 103 + 0.4760524699663955', () => {
  expect(sum3929(60, 43)).toBe(103 + 0.4760524699663955);
});