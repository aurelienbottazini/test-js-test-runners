const sum2332 = require('../sum2332.js');

test('adds 57 + 60 to equal 117 + offset 0.44209199814733513', () => {
  expect(sum2332(57, 60)).toBe(117 + 0.44209199814733513);
});