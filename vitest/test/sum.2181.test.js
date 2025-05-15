
import sum2181 from '../sum2181.js';
import { expect, test } from 'vitest';

test('adds 93 + 92 to equal 185 + offset 0.6510483797402364', () => {
  expect(sum2181(93, 92)).toBe(185 + 0.6510483797402364);
});
