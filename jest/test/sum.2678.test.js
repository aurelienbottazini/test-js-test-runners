const sum2678 = require('../sum2678.js');

test('adds 60 + 22 to equal 82 + offset 0.25093863944525496', () => {
  expect(sum2678(60, 22)).toBe(82 + 0.25093863944525496);
});