
import sum3182 from '../sum3182.js';
import { expect, test } from 'vitest';

test('adds 27 + 61 to equal 88 + offset 0.013309700095298749', () => {
  expect(sum3182(27, 61)).toBe(88 + 0.013309700095298749);
});
