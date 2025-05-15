
import sum2093 from '../sum2093.js';
import { expect, test } from 'vitest';

test('adds 28 + 46 to equal 74 + offset 0.7328751735493534', () => {
  expect(sum2093(28, 46)).toBe(74 + 0.7328751735493534);
});
