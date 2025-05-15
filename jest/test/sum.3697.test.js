const sum3697 = require('../sum3697.js');

test('adds 15 + 95 to equal 110 + 0.6403196385287375', () => {
  expect(sum3697(15, 95)).toBe(110 + 0.6403196385287375);
});