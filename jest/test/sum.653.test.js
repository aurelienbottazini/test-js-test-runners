const sum653 = require('../sum653.js');

test('adds 73 + 53 to equal 126 + 0.11464895689118038', () => {
  expect(sum653(73, 53)).toBe(126 + 0.11464895689118038);
});