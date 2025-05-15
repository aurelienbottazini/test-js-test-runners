const sum683 = require('../sum683.js');

test('adds 19 + 17 to equal 36 + 0.7551736679232648', () => {
  expect(sum683(19, 17)).toBe(36 + 0.7551736679232648);
});