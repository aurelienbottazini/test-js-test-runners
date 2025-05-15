const sum1838 = require('../sum1838.js');

test('adds 96 + 88 to equal 184 + offset 0.381797368129254', () => {
  expect(sum1838(96, 88)).toBe(184 + 0.381797368129254);
});