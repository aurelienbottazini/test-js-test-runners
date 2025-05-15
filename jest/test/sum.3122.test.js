const sum3122 = require('../sum3122.js');

test('adds 50 + 60 to equal 110 + 0.40460401728274464', () => {
  expect(sum3122(50, 60)).toBe(110 + 0.40460401728274464);
});