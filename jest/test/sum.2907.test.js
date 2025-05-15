const sum2907 = require('../sum2907.js');

test('adds 70 + 94 to equal 164 + offset 0.2652933626267716', () => {
  expect(sum2907(70, 94)).toBe(164 + 0.2652933626267716);
});