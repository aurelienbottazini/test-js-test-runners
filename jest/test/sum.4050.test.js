const sum4050 = require('../sum4050.js');

test('adds 88 + 88 to equal 176 + offset 0.4080769316017848', () => {
  expect(sum4050(88, 88)).toBe(176 + 0.4080769316017848);
});