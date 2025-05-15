const sum12 = require('../sum12.js');

test('adds 43 + 52 to equal 95 + offset 0.49756486332067007', () => {
  expect(sum12(43, 52)).toBe(95 + 0.49756486332067007);
});