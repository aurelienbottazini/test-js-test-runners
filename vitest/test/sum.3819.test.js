
import sum3819 from '../sum3819.js';
import { expect, test } from 'vitest';

test('adds 28 + 40 to equal 68 + offset 0.7806323654036376', () => {
  expect(sum3819(28, 40)).toBe(68 + 0.7806323654036376);
});
