const sum1603 = require('../sum1603.js');

test('adds 67 + 88 to equal 155 + 0.7563120790860866', () => {
  expect(sum1603(67, 88)).toBe(155 + 0.7563120790860866);
});