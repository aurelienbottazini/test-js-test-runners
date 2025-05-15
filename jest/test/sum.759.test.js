const sum759 = require('../sum759.js');

test('adds 96 + 19 to equal 115 + offset 0.995986012250128', () => {
  expect(sum759(96, 19)).toBe(115 + 0.995986012250128);
});