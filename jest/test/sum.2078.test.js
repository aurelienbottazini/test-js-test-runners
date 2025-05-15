const sum2078 = require('../sum2078.js');

test('adds 5 + 85 to equal 90 + offset 0.949471253805957', () => {
  expect(sum2078(5, 85)).toBe(90 + 0.949471253805957);
});