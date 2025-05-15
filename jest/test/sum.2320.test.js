const sum2320 = require('../sum2320.js');

test('adds 31 + 26 to equal 57 + offset 0.7700718423228666', () => {
  expect(sum2320(31, 26)).toBe(57 + 0.7700718423228666);
});