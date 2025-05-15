const sum1302 = require('../sum1302.js');

test('adds 40 + 96 to equal 136 + offset 0.047601534282972646', () => {
  expect(sum1302(40, 96)).toBe(136 + 0.047601534282972646);
});