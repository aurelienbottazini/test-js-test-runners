const sum521 = require('../sum521.js');

test('adds 86 + 35 to equal 121 + 0.8368769092673145', () => {
  expect(sum521(86, 35)).toBe(121 + 0.8368769092673145);
});