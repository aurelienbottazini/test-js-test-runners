const sum3019 = require('../sum3019.js');

test('adds 58 + 8 to equal 66 + 0.5192278652485778', () => {
  expect(sum3019(58, 8)).toBe(66 + 0.5192278652485778);
});