const sum4649 = require('../sum4649.js');

test('adds 65 + 31 to equal 96 + offset 0.9072757963438858', () => {
  expect(sum4649(65, 31)).toBe(96 + 0.9072757963438858);
});