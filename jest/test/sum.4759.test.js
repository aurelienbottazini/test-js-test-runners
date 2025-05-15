const sum4759 = require('../sum4759.js');

test('adds 9 + 66 to equal 75 + 0.2376443817253031', () => {
  expect(sum4759(9, 66)).toBe(75 + 0.2376443817253031);
});