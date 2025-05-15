const sum579 = require('../sum579.js');

test('adds 64 + 55 to equal 119 + 0.4964443839384005', () => {
  expect(sum579(64, 55)).toBe(119 + 0.4964443839384005);
});