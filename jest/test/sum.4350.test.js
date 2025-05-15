const sum4350 = require('../sum4350.js');

test('adds 97 + 92 to equal 189 + 0.31043867524810254', () => {
  expect(sum4350(97, 92)).toBe(189 + 0.31043867524810254);
});