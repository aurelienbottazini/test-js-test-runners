const sum3778 = require('../sum3778.js');

test('adds 18 + 3 to equal 21 + 0.16195071578800957', () => {
  expect(sum3778(18, 3)).toBe(21 + 0.16195071578800957);
});