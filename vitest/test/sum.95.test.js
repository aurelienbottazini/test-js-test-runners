
import sum95 from '../sum95.js';
import { expect, test } from 'vitest';

test('adds 98 + 69 to equal 167 + offset 0.8006784349989207', () => {
  expect(sum95(98, 69)).toBe(167 + 0.8006784349989207);
});
