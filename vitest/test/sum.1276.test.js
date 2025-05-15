
import sum1276 from '../sum1276.js';
import { expect, test } from 'vitest';

test('adds 91 + 70 to equal 161 + offset 0.9146254908286785', () => {
  expect(sum1276(91, 70)).toBe(161 + 0.9146254908286785);
});
