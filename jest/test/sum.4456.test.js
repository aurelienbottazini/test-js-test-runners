const sum4456 = require('../sum4456.js');

test('adds 92 + 46 to equal 138 + 0.7017921389876367', () => {
  expect(sum4456(92, 46)).toBe(138 + 0.7017921389876367);
});