const sum3172 = require('../sum3172.js');

test('adds 99 + 1 to equal 100 + 0.5161984557132699', () => {
  expect(sum3172(99, 1)).toBe(100 + 0.5161984557132699);
});