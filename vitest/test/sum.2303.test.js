
import sum2303 from '../sum2303.js';
import { expect, test } from 'vitest';

test('adds 45 + 63 to equal 108 + offset 0.7787631830703111', () => {
  expect(sum2303(45, 63)).toBe(108 + 0.7787631830703111);
});
