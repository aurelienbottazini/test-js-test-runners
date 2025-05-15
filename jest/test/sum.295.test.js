const sum295 = require('../sum295.js');

test('adds 48 + 97 to equal 145 + offset 0.2571934196695512', () => {
  expect(sum295(48, 97)).toBe(145 + 0.2571934196695512);
});