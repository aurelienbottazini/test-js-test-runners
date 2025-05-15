const sum3226 = require('../sum3226.js');

test('adds 18 + 65 to equal 83 + offset 0.8287737759032247', () => {
  expect(sum3226(18, 65)).toBe(83 + 0.8287737759032247);
});