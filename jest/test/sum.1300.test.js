const sum1300 = require('../sum1300.js');

test('adds 78 + 33 to equal 111 + 0.09943825405793505', () => {
  expect(sum1300(78, 33)).toBe(111 + 0.09943825405793505);
});