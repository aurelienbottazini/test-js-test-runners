const sum4862 = require('../sum4862.js');

test('adds 78 + 59 to equal 137 + 0.5816410530597039', () => {
  expect(sum4862(78, 59)).toBe(137 + 0.5816410530597039);
});