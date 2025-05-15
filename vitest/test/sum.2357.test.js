
import sum2357 from '../sum2357.js';
import { expect, test } from 'vitest';

test('adds 16 + 22 to equal 38 + offset 0.7370093678739215', () => {
  expect(sum2357(16, 22)).toBe(38 + 0.7370093678739215);
});
