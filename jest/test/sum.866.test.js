const sum866 = require('../sum866.js');

test('adds 81 + 32 to equal 113 + 0.41198622677988195', () => {
  expect(sum866(81, 32)).toBe(113 + 0.41198622677988195);
});