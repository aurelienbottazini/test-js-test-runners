const sum4635 = require('../sum4635.js');

test('adds 5 + 91 to equal 96 + 0.09726846062852668', () => {
  expect(sum4635(5, 91)).toBe(96 + 0.09726846062852668);
});