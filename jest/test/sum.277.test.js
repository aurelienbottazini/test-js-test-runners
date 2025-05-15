const sum277 = require('../sum277.js');

test('adds 17 + 16 to equal 33 + offset 0.688182325201949', () => {
  expect(sum277(17, 16)).toBe(33 + 0.688182325201949);
});