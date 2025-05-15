
import sum1846 from '../sum1846.js';
import { expect, test } from 'vitest';

test('adds 53 + 82 to equal 135 + offset 0.04746429115095796', () => {
  expect(sum1846(53, 82)).toBe(135 + 0.04746429115095796);
});
