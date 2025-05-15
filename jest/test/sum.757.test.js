const sum757 = require('../sum757.js');

test('adds 79 + 28 to equal 107 + offset 0.011591974557448648', () => {
  expect(sum757(79, 28)).toBe(107 + 0.011591974557448648);
});