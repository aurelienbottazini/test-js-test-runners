
import sum3818 from '../sum3818.js';
import { expect, test } from 'vitest';

test('adds 28 + 78 to equal 106 + offset 0.3374889896051355', () => {
  expect(sum3818(28, 78)).toBe(106 + 0.3374889896051355);
});
