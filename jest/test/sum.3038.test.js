const sum3038 = require('../sum3038.js');

test('adds 75 + 89 to equal 164 + 0.9818342774448502', () => {
  expect(sum3038(75, 89)).toBe(164 + 0.9818342774448502);
});