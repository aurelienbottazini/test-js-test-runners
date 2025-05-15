const sum4618 = require('../sum4618.js');

test('adds 54 + 65 to equal 119 + 0.27867762963994314', () => {
  expect(sum4618(54, 65)).toBe(119 + 0.27867762963994314);
});