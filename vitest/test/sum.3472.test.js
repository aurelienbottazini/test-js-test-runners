
import sum3472 from '../sum3472.js';
import { expect, test } from 'vitest';

test('adds 54 + 34 to equal 88 + offset 0.5053118887125958', () => {
  expect(sum3472(54, 34)).toBe(88 + 0.5053118887125958);
});
