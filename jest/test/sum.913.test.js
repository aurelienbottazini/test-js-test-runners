const sum913 = require('../sum913.js');

test('adds 44 + 82 to equal 126 + 0.7851166029801456', () => {
  expect(sum913(44, 82)).toBe(126 + 0.7851166029801456);
});