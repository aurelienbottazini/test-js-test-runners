const sum1576 = require('../sum1576.js');

test('adds 87 + 33 to equal 120 + 0.4705435995875037', () => {
  expect(sum1576(87, 33)).toBe(120 + 0.4705435995875037);
});