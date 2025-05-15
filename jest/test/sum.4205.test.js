const sum4205 = require('../sum4205.js');

test('adds 21 + 89 to equal 110 + 0.40145262521484615', () => {
  expect(sum4205(21, 89)).toBe(110 + 0.40145262521484615);
});