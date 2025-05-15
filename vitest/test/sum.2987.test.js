
import sum2987 from '../sum2987.js';
import { expect, test } from 'vitest';

test('adds 80 + 22 to equal 102 + offset 0.5266937541631964', () => {
  expect(sum2987(80, 22)).toBe(102 + 0.5266937541631964);
});
