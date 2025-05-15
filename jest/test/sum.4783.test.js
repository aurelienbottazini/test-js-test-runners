const sum4783 = require('../sum4783.js');

test('adds 55 + 53 to equal 108 + 0.017186285266804324', () => {
  expect(sum4783(55, 53)).toBe(108 + 0.017186285266804324);
});