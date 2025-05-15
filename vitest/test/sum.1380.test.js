
import sum1380 from '../sum1380.js';
import { expect, test } from 'vitest';

test('adds 86 + 90 to equal 176 + offset 0.06225731500743392', () => {
  expect(sum1380(86, 90)).toBe(176 + 0.06225731500743392);
});
