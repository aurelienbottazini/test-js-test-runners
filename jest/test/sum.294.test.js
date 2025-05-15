const sum294 = require('../sum294.js');

test('adds 47 + 66 to equal 113 + offset 0.5008073242128769', () => {
  expect(sum294(47, 66)).toBe(113 + 0.5008073242128769);
});