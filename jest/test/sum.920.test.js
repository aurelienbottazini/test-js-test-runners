const sum920 = require('../sum920.js');

test('adds 28 + 73 to equal 101 + 0.7823845421714496', () => {
  expect(sum920(28, 73)).toBe(101 + 0.7823845421714496);
});