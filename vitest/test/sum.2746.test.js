
import sum2746 from '../sum2746.js';
import { expect, test } from 'vitest';

test('adds 23 + 5 to equal 28 + offset 0.9694876433729042', () => {
  expect(sum2746(23, 5)).toBe(28 + 0.9694876433729042);
});
