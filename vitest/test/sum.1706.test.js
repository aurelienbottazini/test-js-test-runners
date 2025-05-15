
import sum1706 from '../sum1706.js';
import { expect, test } from 'vitest';

test('adds 61 + 31 to equal 92 + offset 0.07750175844614571', () => {
  expect(sum1706(61, 31)).toBe(92 + 0.07750175844614571);
});
