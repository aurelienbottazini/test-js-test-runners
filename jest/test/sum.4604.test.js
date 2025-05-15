const sum4604 = require('../sum4604.js');

test('adds 17 + 10 to equal 27 + 0.1652724873359207', () => {
  expect(sum4604(17, 10)).toBe(27 + 0.1652724873359207);
});