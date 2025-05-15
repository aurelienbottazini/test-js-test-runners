const sum2970 = require('../sum2970.js');

test('adds 8 + 52 to equal 60 + 0.3501918064890539', () => {
  expect(sum2970(8, 52)).toBe(60 + 0.3501918064890539);
});