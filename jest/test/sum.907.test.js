const sum907 = require('../sum907.js');

test('adds 10 + 10 to equal 20 + offset 0.7388506826528436', () => {
  expect(sum907(10, 10)).toBe(20 + 0.7388506826528436);
});