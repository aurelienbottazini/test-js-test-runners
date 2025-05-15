const sum435 = require('../sum435.js');

test('adds 25 + 57 to equal 82 + offset 0.30867345509774957', () => {
  expect(sum435(25, 57)).toBe(82 + 0.30867345509774957);
});