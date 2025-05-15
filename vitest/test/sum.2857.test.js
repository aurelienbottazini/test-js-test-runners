
import sum2857 from '../sum2857.js';
import { expect, test } from 'vitest';

test('adds 48 + 52 to equal 100 + offset 0.2499792295162192', () => {
  expect(sum2857(48, 52)).toBe(100 + 0.2499792295162192);
});
