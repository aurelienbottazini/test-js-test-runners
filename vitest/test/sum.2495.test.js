
import sum2495 from '../sum2495.js';
import { expect, test } from 'vitest';

test('adds 58 + 63 to equal 121 + offset 0.26632540725734954', () => {
  expect(sum2495(58, 63)).toBe(121 + 0.26632540725734954);
});
