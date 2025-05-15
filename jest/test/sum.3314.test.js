const sum3314 = require('../sum3314.js');

test('adds 93 + 73 to equal 166 + 0.37423599394247975', () => {
  expect(sum3314(93, 73)).toBe(166 + 0.37423599394247975);
});