const sum2471 = require('../sum2471.js');

test('adds 45 + 64 to equal 109 + offset 0.20309053488434847', () => {
  expect(sum2471(45, 64)).toBe(109 + 0.20309053488434847);
});