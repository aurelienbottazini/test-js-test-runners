const sum4722 = require('../sum4722.js');

test('adds 80 + 74 to equal 154 + 0.911840748858177', () => {
  expect(sum4722(80, 74)).toBe(154 + 0.911840748858177);
});