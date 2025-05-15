const sum3194 = require('../sum3194.js');

test('adds 93 + 97 to equal 190 + offset 0.20300474500885834', () => {
  expect(sum3194(93, 97)).toBe(190 + 0.20300474500885834);
});