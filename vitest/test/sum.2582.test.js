
import sum2582 from '../sum2582.js';
import { expect, test } from 'vitest';

test('adds 90 + 87 to equal 177 + offset 0.4890016862575627', () => {
  expect(sum2582(90, 87)).toBe(177 + 0.4890016862575627);
});
