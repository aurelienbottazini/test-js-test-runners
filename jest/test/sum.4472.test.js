const sum4472 = require('../sum4472.js');

test('adds 49 + 11 to equal 60 + 0.5958726375254787', () => {
  expect(sum4472(49, 11)).toBe(60 + 0.5958726375254787);
});