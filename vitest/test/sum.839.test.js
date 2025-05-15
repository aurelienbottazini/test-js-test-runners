
import sum839 from '../sum839.js';
import { expect, test } from 'vitest';

test('adds 16 + 34 to equal 50 + offset 0.004384809233493492', () => {
  expect(sum839(16, 34)).toBe(50 + 0.004384809233493492);
});
