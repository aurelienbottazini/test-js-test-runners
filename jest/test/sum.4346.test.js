const sum4346 = require('../sum4346.js');

test('adds 76 + 0 to equal 76 + offset 0.8714858421035032', () => {
  expect(sum4346(76, 0)).toBe(76 + 0.8714858421035032);
});