const sum2364 = require('../sum2364.js');

test('adds 90 + 97 to equal 187 + 0.5118708099278859', () => {
  expect(sum2364(90, 97)).toBe(187 + 0.5118708099278859);
});