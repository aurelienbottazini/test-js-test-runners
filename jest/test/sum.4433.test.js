const sum4433 = require('../sum4433.js');

test('adds 92 + 30 to equal 122 + offset 0.1028544588887419', () => {
  expect(sum4433(92, 30)).toBe(122 + 0.1028544588887419);
});