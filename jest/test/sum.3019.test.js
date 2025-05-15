const sum3019 = require('../sum3019.js');

test('adds 1 + 52 to equal 53 + offset 0.5515106988193099', () => {
  expect(sum3019(1, 52)).toBe(53 + 0.5515106988193099);
});