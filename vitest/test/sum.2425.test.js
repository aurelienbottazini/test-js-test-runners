
import sum2425 from '../sum2425.js';
import { expect, test } from 'vitest';

test('adds 92 + 56 to equal 148 + offset 0.6581550598511644', () => {
  expect(sum2425(92, 56)).toBe(148 + 0.6581550598511644);
});
