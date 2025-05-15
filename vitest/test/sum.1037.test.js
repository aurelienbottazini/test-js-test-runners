
import sum1037 from '../sum1037.js';
import { expect, test } from 'vitest';

test('adds 98 + 96 to equal 194 + offset 0.5046206436327837', () => {
  expect(sum1037(98, 96)).toBe(194 + 0.5046206436327837);
});
