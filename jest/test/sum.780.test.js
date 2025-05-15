const sum780 = require('../sum780.js');

test('adds 2 + 57 to equal 59 + 0.7361055823430496', () => {
  expect(sum780(2, 57)).toBe(59 + 0.7361055823430496);
});