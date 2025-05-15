
import sum3109 from '../sum3109.js';
import { expect, test } from 'vitest';

test('adds 53 + 38 to equal 91 + offset 0.06751656260842043', () => {
  expect(sum3109(53, 38)).toBe(91 + 0.06751656260842043);
});
