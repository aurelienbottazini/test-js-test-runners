const sum70 = require('../sum70.js');

test('adds 68 + 23 to equal 91 + 0.029555985789547323', () => {
  expect(sum70(68, 23)).toBe(91 + 0.029555985789547323);
});