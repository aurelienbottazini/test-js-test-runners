const sum2786 = require('../sum2786.js');

test('adds 17 + 14 to equal 31 + 0.8183164419928516', () => {
  expect(sum2786(17, 14)).toBe(31 + 0.8183164419928516);
});