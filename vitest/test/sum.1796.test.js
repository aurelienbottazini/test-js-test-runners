
import sum1796 from '../sum1796.js';
import { expect, test } from 'vitest';

test('adds 53 + 82 to equal 135 + offset 0.7032490889609074', () => {
  expect(sum1796(53, 82)).toBe(135 + 0.7032490889609074);
});
