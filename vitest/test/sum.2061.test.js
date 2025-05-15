
import sum2061 from '../sum2061.js';
import { expect, test } from 'vitest';

test('adds 86 + 81 to equal 167 + offset 0.7057203577617203', () => {
  expect(sum2061(86, 81)).toBe(167 + 0.7057203577617203);
});
