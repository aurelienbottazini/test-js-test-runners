const sum3316 = require('../sum3316.js');

test('adds 21 + 46 to equal 67 + 0.04505160877778758', () => {
  expect(sum3316(21, 46)).toBe(67 + 0.04505160877778758);
});