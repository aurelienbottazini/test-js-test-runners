const sum4905 = require('../sum4905.js');

test('adds 30 + 69 to equal 99 + 0.4402005141910481', () => {
  expect(sum4905(30, 69)).toBe(99 + 0.4402005141910481);
});