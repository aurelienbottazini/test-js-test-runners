
import sum519 from '../sum519.js';
import { expect, test } from 'vitest';

test('adds 80 + 27 to equal 107 + offset 0.25317320622453765', () => {
  expect(sum519(80, 27)).toBe(107 + 0.25317320622453765);
});
