const sum156 = require('../sum156.js');

test('adds 90 + 16 to equal 106 + offset 0.6363287489174767', () => {
  expect(sum156(90, 16)).toBe(106 + 0.6363287489174767);
});