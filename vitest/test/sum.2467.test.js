
import sum2467 from '../sum2467.js';
import { expect, test } from 'vitest';

test('adds 47 + 4 to equal 51 + offset 0.5638499139370169', () => {
  expect(sum2467(47, 4)).toBe(51 + 0.5638499139370169);
});
