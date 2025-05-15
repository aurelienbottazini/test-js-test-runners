
import sum2338 from '../sum2338.js';
import { expect, test } from 'vitest';

test('adds 48 + 63 to equal 111 + offset 0.22314596982894563', () => {
  expect(sum2338(48, 63)).toBe(111 + 0.22314596982894563);
});
