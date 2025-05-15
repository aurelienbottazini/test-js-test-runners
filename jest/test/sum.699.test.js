const sum699 = require('../sum699.js');

test('adds 15 + 36 to equal 51 + 0.8019973901776652', () => {
  expect(sum699(15, 36)).toBe(51 + 0.8019973901776652);
});