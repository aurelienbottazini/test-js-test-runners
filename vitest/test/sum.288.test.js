
import sum288 from '../sum288.js';
import { expect, test } from 'vitest';

test('adds 8 + 87 to equal 95 + offset 0.2827071554841003', () => {
  expect(sum288(8, 87)).toBe(95 + 0.2827071554841003);
});
