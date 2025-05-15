const sum1890 = require('../sum1890.js');

test('adds 14 + 46 to equal 60 + offset 0.14600556413883392', () => {
  expect(sum1890(14, 46)).toBe(60 + 0.14600556413883392);
});