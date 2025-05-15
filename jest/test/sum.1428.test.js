const sum1428 = require('../sum1428.js');

test('adds 73 + 46 to equal 119 + offset 0.5773544725578454', () => {
  expect(sum1428(73, 46)).toBe(119 + 0.5773544725578454);
});