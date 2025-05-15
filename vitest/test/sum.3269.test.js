
import sum3269 from '../sum3269.js';
import { expect, test } from 'vitest';

test('adds 1 + 12 to equal 13 + offset 0.33610277801739064', () => {
  expect(sum3269(1, 12)).toBe(13 + 0.33610277801739064);
});
