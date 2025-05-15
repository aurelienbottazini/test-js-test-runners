const sum326 = require('../sum326.js');

test('adds 92 + 52 to equal 144 + 0.11155384083474418', () => {
  expect(sum326(92, 52)).toBe(144 + 0.11155384083474418);
});