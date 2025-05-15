const sum576 = require('../sum576.js');

test('adds 63 + 96 to equal 159 + offset 0.41098966482871946', () => {
  expect(sum576(63, 96)).toBe(159 + 0.41098966482871946);
});